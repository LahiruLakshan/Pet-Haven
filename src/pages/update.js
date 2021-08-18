import React, {useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import {useHistory} from "react-router-dom";
import {FormControl, InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";
import {PET_BY_ID, PETS} from "../api-config";


const useStyles = makeStyles((theme) => ({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
    },
}));

function Update() {

    const classes = useStyles();
    const history = useHistory();
    const [selectedPet, setSelectedPet] = useState();
    const [name, setName] = useState(selectedPet ? selectedPet.name:"");
    const [description, setDescription] = useState(selectedPet ? selectedPet.description:"");
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    const [petsData, setPetsData] = useState([]);
    const [showInputFields, setShowInputFields] = useState(false);

    useEffect(() => {
        fetch(PETS, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setPetsData(data));
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        setTitleError(false);
        setDetailsError(false);

        if (name === '') {
            setTitleError(true);
        }
        if (description === '') {
            setDetailsError(true);
        }

        if (name || description) {
            fetch(`${PET_BY_ID}${selectedPet.id}`, {
                method: 'PUT',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({name: name, description: description})
            }).then((res) => {
                history.push('/');
            })
        }
    }


    const handleChange = (event) => {
        if (selectedPet !== event.target.value) {
            setShowInputFields(false);
            setSelectedPet(event.target.value);
        }
        setName(setPetsData.name);
        setDescription(setPetsData.description)
    }

    useEffect(() => {
        if (selectedPet) {
            setShowInputFields(true);
        }
    }, [selectedPet])

    return (
        <Container size="sm">
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Update the Selected Pet
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>

                <FormControl variant="outlined" className={classes.field}>
                    <InputLabel id="demo-simple-select-outlined-label">Select a Pet</InputLabel>
                    <Select
                        className={classes.field}
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        onChange={handleChange}
                        label="Select a Pet"
                        required
                        color="secondary"
                    >
                        <MenuItem>
                            <em>None</em>
                        </MenuItem>
                        {petsData && petsData.map((pet, index) => {
                            return <MenuItem value={pet} key={index}>{pet.name}</MenuItem>
                        })}
                    </Select>
                </FormControl>

                {showInputFields && <div><TextField className={classes.field}
                                                    onChange={(e) => setName(e.target.value)}
                                                    label="Pet Name"
                                                    variant="outlined"
                                                    color="secondary"
                                                    fullWidth
                                                    required
                                                    defaultValue={selectedPet && selectedPet.name}
                                                    error={titleError}
                />
                    <TextField className={classes.field}
                               onChange={(e) => setDescription(e.target.value)}
                               label="Description"
                               variant="outlined"
                               color="secondary"
                               multiline
                               rows={4}
                               fullWidth
                               defaultValue={selectedPet && selectedPet.description}
                               required
                               error={detailsError}
                    />
                </div>}
                <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon/>}>
                    Update
                </Button>
            </form>


        </Container>
    );
}


export default Update;