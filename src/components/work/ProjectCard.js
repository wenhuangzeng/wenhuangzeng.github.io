import React from "react"
import styles from "./ProjectCard.module.scss"
import ProjectModal from "./ProjectModal"

const ProjectCard = props => {
  const project = props.project
  return (
    <div className={styles.Card}>
      <img
        src={project.image}
        alt={project.name}
        className={styles.CardImage}
      />
      <ProjectModal project={project} />
    </div>
  )
}

export default ProjectCard
