import React, { useRef } from "react"
import Typewriter from "typewriter-effect"

const MyTypewriter = () => {
  const typewritterinput = useRef()

  return (
    <div>
      <Typewriter
        options={{
          strings: [
            "<mark>Wenhuang Zeng</mark>",
            "<mark>WEN-hwahng ZENG</mark>",
            "<mark>曾文煌</mark>",
          ],
          autoStart: true,
          loop: true,
        }}
      />
      <div id="typewritercontainer" ref={typewritterinput}></div>
    </div>
  )
}

export default MyTypewriter
