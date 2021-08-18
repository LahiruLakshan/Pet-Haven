import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'
import {PETS, PET_BY_ID} from "../api-config";

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
});

export default function Create({modalClose,update,selectedNote}) {
    const classes = useStyles();
    const history = useHistory();
    const [name, setName] = useState(selectedNote ? selectedNote.name:"");
    const [description, setDescription] = useState(selectedNote ? selectedNote.description:"");
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);

    const handleUpdate = (e) => {
        e.preventDefault();
        setTitleError(false);
        setDetailsError(false);

        if (name === '' && !selectedNote) {
            setTitleError(true);
        }
        if (description === '' && !selectedNote) {
            setDetailsError(true);
        }

        if (selectedNote){
            fetch(`${PET_BY_ID}${selectedNote.id}`, {
                method: 'PUT',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({ name: name, description: description})
            }).then((res) => {
                update();
                history.push('/');
            })
            modalClose();
            return;
        }

        if (name && description) {
            fetch(PETS, {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({ name: name, description: description})
            }).then(() => history.push('/'))
        }
    }

    return (
        <Container size="sm">
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Add a New Pet
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleUpdate}>
                <TextField className={classes.field}
                           onChange={(e) => setName(e.target.value)}
                           label="Pet Name"
                           variant="outlined"
                           color="secondary"
                           fullWidth
                           required
                           defaultValue={name && name}
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
                           defaultValue={description && description}
                           required
                           error={detailsError}
                />

                {!selectedNote && <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon/>}>
                    Submit
                </Button>}
                {selectedNote && <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon/>}>
                    Update
                </Button>}
            </form>


        </Container>
    );
}
