import React from 'react';
import { Helmet } from "react-helmet"
import ProjectCard from '../components/work/ProjectCard';
import {Grid, Container, Icon } from 'semantic-ui-react';
import { Link } from "gatsby"
import styles from './projects.module.scss';
import projects from '../components/work/ProjectContent';

const ProjectsPage = () => (
    <div className={styles.ProjectsContainer}>
        <Helmet>
            <title>W / Z / Projects</title>
            <meta name="description" content="Hi there!" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="Wenhuang Zeng" />
            <meta name="keywords" content="Wenhuang Zeng, Brown University, Software Developer, Projects" />
        </Helmet>

        <Container fluid className={styles.Heading}>
        <h1><Link to="/"><Icon name="arrow left" link size="small" /></Link><mark>My Projects</mark></h1>
        </Container>

        <Grid stackable>
            <Grid.Row columns={3}>
                {projects.map( (project) => {
                    return (
                        <Grid.Column>
                            <ProjectCard project={project} />
                        </Grid.Column>
                    )

                })}

            </Grid.Row>

        </Grid>
    </div>
)

export default ProjectsPage