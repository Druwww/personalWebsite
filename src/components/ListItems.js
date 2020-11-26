import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import BuildIcon from '@material-ui/icons/Build';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';

import AssignmentIcon from '@material-ui/icons/Assignment';
import GetAppIcon from '@material-ui/icons/GetApp';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { useDispatch, useSelector } from 'react-redux'
import {
    update,
    selectMainTab
} from '../reducers/mainTabReducer'

export function MainListItems() {

  const mainTab = useSelector(selectMainTab);
  const dispatch = useDispatch();

  const handleListItemClick = (event, index) => {
    dispatch(update(index))
  }


  return (
      <div>
        <ListItem 
          button
          selected={mainTab.page === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>
        <ListItem 
          button
          selected={mainTab.page === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Experiences" />
        </ListItem>
        <ListItem 
          button
          selected={mainTab.page === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Formations" />
        </ListItem>
        <ListItem 
          button
          selected={mainTab.page === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText primary="Skills" />
        </ListItem>
        <ListItem 
          button
          selected={mainTab.page === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <FlightTakeoffIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
      </div>
  )

};

export function SecondaryListItems() {

  const mainTab = useSelector(selectMainTab);
  const dispatch = useDispatch();

  const handleListItemClick = (event, index) => {
    dispatch(update(index))
  }


  return (
      <div>
        <ListItem 
          button
          selected={mainTab.page === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Resume" />
        </ListItem>
        <ListItem 
          button
        >
          <ListItemIcon>
            <GetAppIcon />
          </ListItemIcon>
          <ListItemText primary="Download Resume" />
        </ListItem>
        <ListItem 
          button
          selected={mainTab.page === 7}
        >
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact Me" />
        </ListItem>
        <ListItem 
          button
          component="a" 
          href="https://www.linkedin.com/in/quentin-mulliez-66282a179/"
          target="_blank"
        >
          <ListItemIcon>
            <LinkedInIcon />
          </ListItemIcon>
          <ListItemText primary="Linkedin" />
        </ListItem>
    </div>
  )
};