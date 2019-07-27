import React from "react"
import LazyLoad from "react-lazyload"
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
      <LazyLoad once>
        <img src={TileOne} alt="Tile One of Cover" />
      </LazyLoad>
    </div>
    <div className={styles.PortraitTile}>
      <LazyLoad once>
        <img src={TileTwo} alt="Tile Two of Cover" />
      </LazyLoad>
    </div>
    <div className={styles.PortraitTile}>
      <LazyLoad once>
        <img src={TileThree} alt="Tile Three of Cover" />
      </LazyLoad>
    </div>
    <div className={styles.PortraitTile}>
      <LazyLoad once>
        <img src={TileFour} alt="Tile Four of Cover" />
      </LazyLoad>
    </div>
    <div className={styles.PortraitTile}>
      <LazyLoad once>
        <img src={TileFive} alt="Tile Five of Cover" />
      </LazyLoad>
    </div>
    <div className={styles.PortraitTile}>
      <LazyLoad once>
        <img src={TileSix} alt="Tile Six of Cover" />
      </LazyLoad>
    </div>
    <div className={styles.PortraitTile}>
      <LazyLoad once>
        <img src={TileSeven} alt="Tile Seven of Cover" />
      </LazyLoad>
    </div>
    <div className={styles.PortraitTile}>
      <LazyLoad once>
        <img src={TileEight} alt="Tile Eight of Cover" />
      </LazyLoad>
    </div>
    <div className={styles.PortraitTile}>
      <LazyLoad once>
        <img src={TileNine} alt="Tile Nine of Cover" />
      </LazyLoad>
    </div>
  </div>
)

export default Cover
