import React from 'react';
import Typewriter from 'typewriter-effect';
import './MyName.css';
import { Container, Header } from 'semantic-ui-react'

export default function MyName() {
  return (
    <Container fluid className={"name-div"}>
      {
        <Typewriter
          options={{
            strings: ['Wenhuang Zeng', 'WEN-hwahng ZENG', '曾文煌'],
            autoStart: true,
            loop: true
          }}
        />
      }
    </Container>
  )
}