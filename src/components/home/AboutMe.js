import React from "react"
import { Container, Button, Icon, Grid } from "semantic-ui-react"
import styles from "./AboutMe.module.scss"

import Loadable from "react-loadable"
const loader = () => <div>Loading...</div>
const LoadableComponent = Loadable({
  loader: () => import("./Typewriter"),
  loading: loader,
})

const AboutMe = () => (
  <Grid>
    <Grid.Row className={styles.TopRow}>
      <Container fluid className={styles.Typewriter}>
        <h1>Hi, I'm</h1>
        <LoadableComponent />
      </Container>
    </Grid.Row>

    <Grid.Row className={styles.CenterRow}>
      <Container fluid className={styles.Paragraphs}>
        <p>
          I'm a junior at <span>Brown University</span> majoring in{" "}
          <span>computer science</span> and <span>applied math</span>. My
          passion in tech is to solve problems by creating softwares driven by{" "}
          <span>data science</span> and <span>human–computer interaction</span>.
        </p>
        <p>
          This past summer, I was a <span>software engineering intern</span> at
          Johnson & Johnson. Currently, I'm a <span>researcher</span> at Brown
          AI Lab and the <span>co-president</span> of China Care Brown. I'm also
          a <span>teaching assistant</span> for master's course DATA1050: Data
          Engineering.
        </p>
        <p>
          Things I like to do in my free time include cooking, working out,
          skateboarding, and drinking tea. I would always{" "}
          like to talk -- you can reach me at &nbsp;
          <a
            href="mailto: wenhuang_zeng@brown.edu"
            target="_top"
            aria-label="Send email"
          >
            <Icon name="mail" size="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/whzeng/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn Link"
          >
            <Icon name="linkedin" size="large" />
          </a>
          <a
            href="https://www.instagram.com/wh_zeng/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram Link"
          >
            <Icon name="instagram" size="large" />
          </a>
          .
        </p>
      </Container>
    </Grid.Row>
  </Grid>
)

export default AboutMe
