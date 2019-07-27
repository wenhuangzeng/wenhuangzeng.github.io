import React from "react"
import { Helmet } from "react-helmet"
import { Grid } from "semantic-ui-react"
import Navigation from "../components/navigation/Navigation"
import AboutMe from "../components/home/AboutMe"
import Cover from "../components/home/Cover"
import styles from "./index.module.scss"
import "semantic-ui-css/semantic.min.css"

const IndexPage = () => (
  <React.Fragment>
    <Helmet>
      <title>W / Z</title>
      <html lang="en" />
      <meta
        name="description"
        content="Wenhuang Zeng | Computer Science&Applied Math @ Brown University"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Wenhuang Zeng" />
      <meta
        name="keywords"
        content="Wenhuang Zeng, Brown University, Software Developer, Data Scientist, Brown Computer Science, Brown Applied Math"
      />
    </Helmet>
    <Navigation activeTab={"index"} />
    <Grid
      stackable
      verticalAlign={"middle"}
      centered
      columns={9}
      className={styles.HomeContainer}
    >
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
