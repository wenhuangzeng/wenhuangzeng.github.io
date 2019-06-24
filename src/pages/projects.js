import React from 'react';
import ProjectCard from '../components/work/ProjectCard';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';

const ProjectsPage = () => (

    <Grid stackable>
        <Grid.Row columns={4}>
            <Grid.Column>
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

        </Grid.Row>

    </Grid>
)

export default ProjectsPage