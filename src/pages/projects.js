import React from "react"
import { Helmet } from "react-helmet"
// import ProjectCard from "../components/work/ProjectCard"
import Navigation from "../components/navigation/Navigation"
import { Grid, Container } from "semantic-ui-react"
import { Link } from "gatsby"
import styles from "./projects.module.scss"
import projects from "../components/work/ProjectContent"
import ProjectRow from "../components/work/ProjectRow"

const ProjectsPage = () => (
  <React.Fragment>
    <Helmet>
      <title>W / Z / Projects</title>
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
    <Navigation />

    {/* <div className={styles.ProjectsContainer}>
      <Container fluid className={styles.Heading}>
        <h1>Under development...</h1>
      </Container>
    </div> */}

    <div className={styles.ProjectsContainer}>
      <Container className={styles.Heading}>
        <h1>
          <mark>My Projects</mark>
        </h1>
      </Container>

      <Grid stackable>
        <Grid.Row columns={1}>
          {projects.map(project => {
            return (
              <Grid.Column>

                <br />
                <br />
                <ProjectRow project={project} />
                <br />
                <br />

              </Grid.Column>
            )
          })}
        </Grid.Row>
      </Grid>
    </div>
  </React.Fragment>
)

export default ProjectsPage
