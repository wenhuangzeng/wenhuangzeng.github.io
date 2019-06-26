import React from 'react';
import { List, Button, Container, Image, Header, Modal } from 'semantic-ui-react'
import styles from './ProjectModal.module.scss';

const ProjectModal = (props) => {
    const project = props.project;
    return (
        <Modal trigger={
        
        <Button fluid basic color='black' className={styles.BriefButton}>
            <h2>{project.name}</h2>
            <a href="#">{project.tools.join(', ')}</a>
        </Button>}>
        <Modal.Content image>
          <Image wrapped size='medium' verticalAlign='middle' src={project.image} className={styles.ModalImage} />
          <Modal.Description className={styles.Description}>
              <Header as='h1'><mark>{project.name}</mark></Header>
              <Container fluid>
                <p>{project.description}</p>
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
                <List divided horizontal link className={styles.Links}>
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
    )
}

export default ProjectModal