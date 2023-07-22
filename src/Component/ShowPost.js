import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 945,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
// https://jsonplaceholder.typicode.com/posts/2
const ShowPost = ({ post }) => {
    const classes = useStyles();

    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + post)
            .then(res => res.json())
            .then(data => setDetails(data))
    },)
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {details.id}
                </Typography>
                <Typography variant="h5" component="h2">
                    {details.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {details.body}

                </Typography>
            </CardContent>

        </Card>
    );
};

export default ShowPost;