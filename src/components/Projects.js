import React from 'react';

import WorkInProgress from './WorkInProgress';

import Typography from '@material-ui/core/Typography';


export default function Projects() {
  
    return (
        <div>
            <Typography gutterBottom variant="h4" component="h2">
                Projects !
            </Typography>
            <WorkInProgress/>
        </div>
    )
}