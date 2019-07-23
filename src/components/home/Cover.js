import React from "react"
import styles from "./Cover.module.scss"
import TileOne from "../../images/portrait/1.jpg"
import TileTwo from "../../images/portrait/2.jpg"
import TileThree from "../../images/portrait/3.jpg"
import TileFour from "../../images/portrait/4.jpg"
import TileFive from "../../images/portrait/5.jpg"
import TileSix from "../../images/portrait/6.jpg"
import TileSeven from "../../images/portrait/7.jpg"
import TileEight from "../../images/portrait/8.jpg"
import TileNine from "../../images/portrait/9.jpg"

const Cover = () => (
  <div className={styles.PortraitBoard}>
    <div className={styles.PortraitTile}>
      <img src={TileOne} alt="Tile One of Cover" />
    </div>
    <div className={styles.PortraitTile}>
      <img src={TileTwo} alt="Tile Two of Cover" />
    </div>
    <div className={styles.PortraitTile}>
      <img src={TileThree} alt="Tile Three of Cover" />
    </div>
    <div className={styles.PortraitTile}>
      <img src={TileFour} alt="Tile Four of Cover" />
    </div>
    <div className={styles.PortraitTile}>
      <img src={TileFive} alt="Tile Five of Cover" />
    </div>
    <div className={styles.PortraitTile}>
      <img src={TileSix} alt="Tile Six of Cover" />
    </div>
    <div className={styles.PortraitTile}>
      <img src={TileSeven} alt="Tile Seven of Cover" />
    </div>
    <div className={styles.PortraitTile}>
      <img src={TileEight} alt="Tile Eight of Cover" />
    </div>
    <div className={styles.PortraitTile}>
      <img src={TileNine} alt="Tile Nine of Cover" />
    </div>
  </div>
)

export default Cover
