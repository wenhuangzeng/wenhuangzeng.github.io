import React from 'react';
import Typewriter from 'typewriter-effect';
import './MyName.css';

export default function MyName() {

  return (
    <div className={"name-div"}>
      {
        <Typewriter
          options={{
            strings: ['Wenhuang Zeng', 'WEN-hwahng ZENG', '曾文煌'],
            autoStart: true,
            loop: true,
          }}
        />
      }
    </div>
  )
}