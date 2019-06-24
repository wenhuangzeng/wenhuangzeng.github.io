import React from 'react';
import ProjectCard from '../components/work/ProjectCard/ProjectCard';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';

const ProjectsPage = () => (

    <Grid>
        <Grid.Row columns={2}>
            <Grid.Column>
                <ProjectCard 
                    name={"whatt"}
                    description={"description123"} 
                    image={require('../images/steve.jpg')}
                    tools={['tool1', 'tool2']}
                />
            </Grid.Column>


            <GridColumn>
                <ProjectCard 
                    name={"whatt"}
                    description={"description123"} 
                    image={require('../images/steve.jpg')}
                    tools={['tool1', 'tool2']}
                />
                </GridColumn>
        </Grid.Row>

    </Grid>
)

export default ProjectsPage