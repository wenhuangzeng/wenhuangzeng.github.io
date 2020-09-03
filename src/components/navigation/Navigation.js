import React from "react"
import { Link } from "gatsby"
import styles from "./Navigation.module.scss"
import resumePDF from '../../../static/Resume.pdf';

const Navigation = props => {
  const activeTab = props.activeTab
  let homeTab = <mark>HOME</mark>
  let projectTab = <mark>PROJECT</mark>

  if (activeTab === "index") {
    homeTab = <mark className={styles.ActiveTab}>HOME</mark>
  } else if (activeTab === "projects") {
    projectTab = <mark className={styles.ActiveTab}>PROJECT</mark>
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">{homeTab}</Link>
        </li>
        <li>
          <Link to="/projects">{projectTab}</Link>
        </li>
        <li>
          <a href="Resume.pdf" target="_blank" aria-label="Resume">
            {<mark>RESUME</mark>}
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
