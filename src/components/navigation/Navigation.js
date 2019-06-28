import React from 'react';
import { Link } from "gatsby"
import { Icon } from 'semantic-ui-react'
import styles from './Navigation.module.scss'

const Navigation = () => ( 
    <nav>
        <ul>
            <li><a href="/"><mark>HOME</mark></a></li>
            <li><Link to="/projects"><mark>PROJECT</mark></Link></li>
            <li><a href="#"><mark>RESUME</mark></a></li>
        </ul>
    </nav>
)

export default Navigation