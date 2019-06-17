import React from 'react';
import './Navigation.css'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className={"navigation-div"}>
        <Button inverted color='yellow'>
            RESUME
        </Button>
        <Button inverted color='blue'>
            <Link to="/projects">PROJECTS</Link>
        </Button>
    </div>
  )
}