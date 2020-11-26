import React from 'react';

import WorkInProgress from './WorkInProgress';

import Typography from '@material-ui/core/Typography';


export default function Overview() {
  
    return (
        <div>
            <Typography gutterBottom variant="h4" component="h2">
                Overview !
            </Typography>
            <WorkInProgress/>
        </div>
    )
}