import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import BuildIcon from '@material-ui/icons/Build';
import construction from '../images/underConstruction.gif'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto',
        width: '70%',
    },
    media: {
        height: '100%',
        width: '100%',
      },
}));

function WorkInProgress() {

    const classes = useStyles();

    return (
        
        <div className={classes.root}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        alt="Contemplative Reptile"
                        height="500"
                        image={construction}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Work in Progress
                                    <BuildIcon fontSize="large" />
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            quentinmulliez.com is under construction, check out the <a target="_blank" href="https://github.com/Druwww/personalWebsite">Github repository</a> !
                                </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default WorkInProgress