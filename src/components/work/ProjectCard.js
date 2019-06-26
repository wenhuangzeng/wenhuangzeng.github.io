import React from 'react';
import styles from './ProjectCard.module.scss';
import ProjectModal from './ProjectModal';

const ProjectCard = (props) => {
  const project = props.project;
  return (
    <div className={styles.Card}>
      <img src={project.image} alt={project.name} className={styles.CardImage} />
      <div className={styles.Overlay}>
        <ProjectModal project={project} />    
      </div>
    </div>
  )
}

export default ProjectCard