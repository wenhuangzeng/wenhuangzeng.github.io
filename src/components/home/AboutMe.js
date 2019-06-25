import React from 'react';
import Typewriter from 'typewriter-effect';
import { Container, Button, Icon, Grid } from 'semantic-ui-react'
import { Link } from "gatsby"
import styles from './AboutMe.module.scss'

const AboutMe = () => (
    <Grid>
        <Grid.Row className={styles.TopRow}>
            <Container fluid className={styles.Typewriter}>
            <h1>Hi, I'm</h1>
            <Typewriter
            options={{
                strings: ['<mark>Wenhuang Zeng</mark>', '<mark>WEN-hwahng ZENG</mark>', '<mark>曾文煌</mark>'],
                autoStart: true,
                loop: true
            }}
            />
            </Container>
        </Grid.Row>

        <Grid.Row className={styles.CenterRow}>
            <Container fluid className={styles.Paragraphs}>
            <p>
                I'm a junior at <span>Brown University</span> majoring in <span>computer science</span> and <span>applied math</span>. My passion in tech is to solve problems by creating softwares driven by <span>data science</span> and <span>human–computer interaction</span>.
                <br></br>
                <br></br>
                This past summer, I was a <span>software engineering intern</span> at Johnson & Johnson. Currently, I am a <span>researcher</span> at Brown AI Lab and the <span>co-president</span> of China Care Brown.
                <br></br>
                <br></br>
                Things I like to do in my free time include cooking, working out, skateboarding, and drinking tea.
            </p>
            </Container>
        </Grid.Row>

        <Grid.Row columns={2} className={styles.BottomRow}>
            <Grid.Column columns={"equal"}>
            {/* <Link to="/projects"> */}
            <Button fluid inverted color='purple'>
              <Icon name='file code' /> 
              PROJECTS
            </Button>
            {/* </Link> */}
            </Grid.Column>
            <Grid.Column columns={"equal"}>
            <Button fluid inverted color='teal'>
              <Icon name='file pdf' /> 
                RESUME
            </Button>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default AboutMe