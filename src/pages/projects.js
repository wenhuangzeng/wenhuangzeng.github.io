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
    <Navigation activeTab={"projects"} />

    <div className={styles.ProjectsContainer}>

      <Grid stackable>
        <Grid.Row columns={1}>
          {projects.map(project => {
            return (
              <Grid.Column>
                <br />
                <br />  
                <ProjectRow project={project} />
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
