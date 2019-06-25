import React from 'react';
import { List, Button, Container, Card, Image, Header, Modal } from 'semantic-ui-react'
import styles from './ProjectCard.module.scss';
import ProjectsPage from '../../pages/projects';

const ProjectCard = (props) => {

  const project = props.project;

  // <Card className={styles.Card}>
  //   <Image src={project.image} wrapped ui={false} className={styles.Image}/>
  //   <Card.Content>
  //     <Card.Header>
  //       {project.name}
  //     </Card.Header>
  //     <Card.Meta> 
            // {project.tools.map((element) => {
            //     return <a>{ element }</a>
            // })}
  //       </Card.Meta>
  //     <Card.Description>
  //       {project.description}
  //     </Card.Description>
  //   </Card.Content>
    // <Modal trigger={<Button fluid inverted>More</Button>}>
    //   <Modal.Header>{project.name}</Modal.Header>
    //   <Modal.Content image>
    //     <Image wrapped size='medium' src={project.image} />
    //     <Modal.Description>
    //       <Header>{project.name}</Header>
    //       <p>We've found the following gravatar image associated with your e-mail address.</p>
    //       <p>Is it okay to use this photo?</p>
    //     </Modal.Description>
    //   </Modal.Content>
    // </Modal>
  // </Card>


  return (

    <div className={styles.Card}>
      <img src={project.image} className={styles.CardImage} />
      {/* <Image src={project.image} wrapped ui={false} className={styles.Image}/> */}
      <div className={styles.Overlay}>

      <Modal trigger={<Button basic color='black' className={styles.Brief}>
        {project.name}
        <br/> 
        {project.tools.map((tool) => {
          return (<a>{ tool }   </a>)
        })}
      </Button>}>
        <Modal.Header>{project.name}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' verticalAlign='middle' src={project.image} className={styles.ModalImage} />
          <Modal.Description>
              <Header as='h3'>Description</Header>
              <Container fluid className={styles.Content}>
                <p>{project.description}</p>

                <List celled horizontal link>
                {project.tools.map((tool) => {
                  return (
                    <List.Item as='a'>{tool}</List.Item>
                  )
                })}
                </List>

                <List>
                  {project.details.map((detail) => {
                    return (
                      <List.Item>
                        <List.Icon name='star outline' />
                        <List.Content>{detail}</List.Content>
                      </List.Item>
                    )
                  })}
                </List>
                <br></br>
                <br></br>
                <List divided horizontal link>
                  {project.links.map((link) => {
                  return (
                    <List.Item><a href={link.url}>{link.name}</a></List.Item>
                  )
                })}
                </List>


              </Container>
          </Modal.Description>
        </Modal.Content>
      </Modal>
        
      </div>
    </div>

  )
}

export default ProjectCard