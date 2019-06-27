import React from 'react';
import { Link } from "gatsby"
import { Icon } from 'semantic-ui-react'
import styles from './Navigation.module.scss'

const Navigation = () => ( 
    <nav>
        <ul>
            <li><a href="#home">HOME</a></li>
            <li><Link to="/projects">PROJECT</Link></li>
            <li><a href="#">RESUME</a></li>
            <li><a href="mailto: wenhuang_zeng@brown.edu" target="_top"><Icon name='mail' size="large" /></a></li>
            <li><a href="https://www.linkedin.com/in/whzeng/" target="_blank"><Icon name='linkedin' size="large" /></a></li>
            <li><a href="https://www.instagram.com/wh_zeng/" target="_blank"><Icon name='instagram' size="large" /></a></li>
        </ul>
    </nav>
)

export default Navigation