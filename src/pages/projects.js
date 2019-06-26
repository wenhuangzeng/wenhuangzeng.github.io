import React from 'react';
import { Helmet } from "react-helmet"
import ProjectCard from '../components/work/ProjectCard';
import { Grid, GridRow, GridColumn, Container } from 'semantic-ui-react';
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
        <h1><mark>My Projects</mark></h1>
        </Container>

        <Grid stackable>
            <Grid.Row columns={5}>

                {projects.map( (project) => {
                    return (
                        <Grid.Column>
                            <ProjectCard project={project} />
                        </Grid.Column>
                    )

                })}

                {/* <Grid.Column>
                    <ProjectCard 
                        name={"whatt"}
                        description={"description123"} 
                        image={require('../images/1.jpg')}
                        tools={['tool1', 'tool2']}
                    />
                </Grid.Column>


                <GridColumn>
                    <ProjectCard 
                        name={"whatt"}
                        description={"description123"} 
                        image={require('../images/2.jpg')}
                        tools={['tool1', 'tool2']}
                    />
                </GridColumn>

                <Grid.Column>
                    <ProjectCard 
                        name={"whatt"}
                        description={"description123"} 
                        image={require('../images/3.jpg')}
                        tools={['tool1', 'tool2']}
                    />
                </Grid.Column>


                <Grid.Column>
                    <ProjectCard 
                        name={"whatt"}
                        description={"description123"} 
                        image={require('../images/4.jpg')}
                        tools={['tool1', 'tool2']}
                    />
                </Grid.Column>

                <Grid.Column>
                    <ProjectCard 
                        name={"whatt"}
                        description={"description123"} 
                        image={require('../images/4.jpg')}
                        tools={['tool1', 'tool2']}
                    />
                </Grid.Column>

                <Grid.Column>
                    <ProjectCard 
                        name={"whatt"}
                        description={"description123"} 
                        image={require('../images/4.jpg')}
                        tools={['tool1', 'tool2']}
                    />
                </Grid.Column> */}

            </Grid.Row>

        </Grid>
    </div>
)

export default ProjectsPage