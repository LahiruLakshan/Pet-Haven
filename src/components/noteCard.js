import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import {CardActions, CardMedia, makeStyles} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
});

export default function NoteCard({handleOpen, note, handleDelete}) {

    const classes = useStyles();
    const moment = require('moment');

    return (
        <div>
            <Card elevation={1} >
                <CardHeader

                    avatar={ note.name &&
                    <Avatar style={{backgroundColor: "#0cad5d"}}>
                        {note.name[0].toUpperCase()}
                    </Avatar>}
                    title={note.name}
                    subheader={moment(note.createdAt).format('lll')}
                />

                <CardContent >
                    <CardMedia

                        className={classes.media}
                        image={note.image}
                        title="Paella dish"
                    />
                    <Typography variant="body2" color="textSecondary" >
                        {note.description}
                    </Typography>
                </CardContent>
                <CardActions style={{float:"right"}}>
                    <IconButton onClick={handleOpen}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton  onClick={() => handleDelete(note.id)}>
                        <DeleteOutlined />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
}