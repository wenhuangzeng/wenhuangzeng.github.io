import React from "react"
import { Link } from "gatsby"
import { Icon } from "semantic-ui-react"
import styles from "./Navigation.module.scss"

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <a href="/" aria-label="Home">
          <mark>HOME</mark>
        </a>
      </li>
      <li>
        <Link to="/projects">
          <mark>PROJECT</mark>
        </Link>
      </li>
      <li>
        <a href="#" aria-label="Resume">
          <mark>RESUME</mark>
        </a>
      </li>
    </ul>
  </nav>
)

export default Navigation
