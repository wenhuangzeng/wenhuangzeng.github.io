import React from 'react';
import './Navigation.css'
import { Button, Container, Icon, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    
    // <Container fluid className={"navigation-div"}>
      /* <Button.Group widths='2'>
        
        <Button inverted color='blue'>
        <Icon name='file code' /> 
            <Link to="/projects">PROJECTS</Link>
        </Button>

        <Button inverted color='yellow'>
        <Icon name='file pdf' /> 
            RESUME
        </Button>
      </Button.Group> */

        <Grid padded grid columns='2' stretched className={"navigation-div"}>
          <Grid.Row>
            <Grid.Column>
            <Button fluid inverted color='blue'>
              <Icon name='file code' /> 
              <Link to="/projects">PROJECTS</Link>
            </Button>
            </Grid.Column>
            <Grid.Column>
            <Button fluid inverted color='yellow'>
              <Icon name='file pdf' /> 
                RESUME
            </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>


      
    // </Container>
  )
}