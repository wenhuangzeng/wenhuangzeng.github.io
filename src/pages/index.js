import React from 'react';
import { Helmet } from "react-helmet"
import { Grid } from 'semantic-ui-react'
import AboutMe from '../components/home/AboutMe';
import Cover from '../components/home/Cover';
import styles from './index.module.scss';
import 'semantic-ui-css/semantic.min.css'


const IndexPage = () => (
  <React.Fragment>
    <Helmet>
        <title>W|Z</title>
        <meta name="description" content="Hi there!" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */}
        <meta name="author" content="Wenhuang Zeng" />
        <meta name="keywords" content="Wenhuang Zeng, Brown University, Software Developer"></meta>
    </Helmet>
    <Grid stackable verticalAlign={"middle"} centered columns={9} className={styles.HomeContainer}>
      <Grid.Column stretched width={4} className={styles.Cover}>
        <Cover />
      </Grid.Column>
      <Grid.Column stretched width={5} className={styles.AboutMe}>
        <AboutMe />
      </Grid.Column>
    </Grid>
  </React.Fragment>
)

export default IndexPage