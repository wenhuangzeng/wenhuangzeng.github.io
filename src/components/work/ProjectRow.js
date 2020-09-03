import React from "react"
import { Grid, List, Container, Divider } from "semantic-ui-react"
import styles from "./ProjectRow.module.scss"

const ProjectRow = props => {
  const project = props.project
  return (
    <Grid stackable centered>
      <Grid.Column width={8} verticalAlign="middle">
        <img src={project.image} alt={"project image"} />
      </Grid.Column>
      <Grid.Column width={8} textAlign="left" className={styles.Description}>
        <h1>
          <mark>{project.name}</mark>
        </h1>
        <a>{project.tools.join(", ")}</a>
        <Divider />

        <Container>
          <p>{project.description}</p>
          <List>
            {project.details.map(detail => {
              return (
                <List.Item>
                  <List.Icon name="star outline" />
                  <List.Content>{detail}</List.Content>
                </List.Item>
              )
            })}
          </List>
          <List divided horizontal link className={styles.Links}>
            {project.links.map(link => {
              return (
                <List.Item>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener"
                    aria-label="Project Link"
                  >
                    {link.name}
                  </a>
                </List.Item>
              )
            })}
          </List>
        </Container>
      </Grid.Column>
    </Grid>
  )
}

export default ProjectRow
