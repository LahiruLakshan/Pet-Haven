import React, {useEffect, useState} from 'react'
import Container from '@material-ui/core/Container'
import Masonry from 'react-masonry-css'
import NoteCard from '../components/noteCard'
import {Backdrop, Card, Fade, makeStyles, Modal} from "@material-ui/core";
import Create from "./create";
import {PETS, PET_BY_ID} from "../api-config";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width:"60vw",
        backgroundColor: "#ffffff",
        borderRadius:"10px",
        // border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Notes() {
    const [petData, setPetData] = useState([]);
    const classes = useStyles();
    const [modalClose, setModalClose] = React.useState(false);
    const [selectedNote, setSelectedNote] = React.useState(false);


    const update = () => {
        fetch(PETS, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                let sortedData = data.sort((a, b) => (a.id < b.id) ? 1 : -1)
                setPetData(sortedData)
            });

    }
    useEffect(() => {
        update();
    }, [])

    const handleDelete = async (id) => {
        await fetch(`${PET_BY_ID}${id}`, {
            method: 'DELETE'
        })
        const newNotes = petData.filter(note => note.id !== id);
        setPetData(newNotes);
    }

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    };

    const modal = () =>{
        setModalClose(!modalClose);
    }
    return (
        <Container>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {petData.map((note, key) => (
                    <div key={note.id}>
                        <NoteCard handleOpen={()=>{
                            modal();
                            setSelectedNote(note);
                        }} key={key} note={note} handleDelete={handleDelete}/>
                    </div>
                ))}
            </Masonry>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={modalClose}
                onClose={modal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modalClose}>
                    <Card className={classes.paper}>
                        <Create modalClose={modal} update={update} selectedNote={selectedNote}/>
                    </Card>
                </Fade>
            </Modal>
        </Container>
    );
}
