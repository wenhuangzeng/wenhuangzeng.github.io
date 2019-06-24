import React from 'react';
import styles from './Cover.module.scss'
import TileOne from '../../images/1.jpg'
import TileTwo from '../../images/2.jpg'
import TileThree from '../../images/3.jpg'
import TileFour from '../../images/4.jpg'
import TileFive from '../../images/5.jpg'
import TileSix from '../../images/6.jpg'
import TileSeven from '../../images/7.jpg'
import TileEight from '../../images/8.jpg'
import TileNine from '../../images/9.jpg'

const Cover = () => (
    <div className={styles.PortraitBoard}>
        <div className={styles.PortraitTile}>
            <img src={TileOne} alt="Tile One of Cover Image" />
        </div>
        <div className={styles.PortraitTile}>
            <img src={TileTwo} alt="Tile Two of Cover Image" />
        </div>
        <div className={styles.PortraitTile}>
            <img src={TileThree} alt="Tile Three of Cover Image" />
        </div>
        <div className={styles.PortraitTile}>
            <img src={TileFour} alt="Tile Four of Cover Image" />
        </div>
        <div className={styles.PortraitTile}>
            <img src={TileFive} alt="Tile Five of Cover Image" />
        </div>
        <div className={styles.PortraitTile}>
            <img src={TileSix} alt="Tile Six of Cover Image" />
        </div>
        <div className={styles.PortraitTile}>
            <img src={TileSeven} alt="Tile Seven of Cover Image" />
        </div>
        <div className={styles.PortraitTile}>
            <img src={TileEight} alt="Tile Eight of Cover Image" />
        </div>
        <div className={styles.PortraitTile}>
            <img src={TileNine} alt="Tile Nine of Cover Image" />
        </div>
    </div>
)

export default Cover
