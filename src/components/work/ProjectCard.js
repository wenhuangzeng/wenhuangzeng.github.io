import React from 'react';
import { Button, Card, Image, Header, Modal } from 'semantic-ui-react'
import styles from './ProjectCard.module.scss';
import ProjectsPage from '../../pages/projects';

const ProjectCard = (props) => (

  <Card className={styles.Card}>
    <Image src={props.image} wrapped ui={false} className={styles.Image}/>
    <Card.Content>
      <Card.Header>
        {props.name}
      </Card.Header>
      <Card.Meta> 
            {props.tools.map((element) => {
                return <a>{ element }</a>
            })}
        </Card.Meta>
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      

    <Modal trigger={<Button fluid>More</Button>}>
    <Modal.Header>{props.name}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={props.image} />
      <Modal.Description>
        <Header>{props.name}</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>



    </Card.Content>
  </Card>

)

export default ProjectCard