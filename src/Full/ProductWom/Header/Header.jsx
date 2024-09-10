import styles from "./Header.module.css"

import { useState } from "react"
import { HashLink as Link } from 'react-router-hash-link';


export default function Header(){

    const[stateWindow, setStateWindow] = useState(true)
    const btnWindow =()=>{
        setStateWindow(!stateWindow)
    }

    return(
        <>
            <header>
                <div className={styles.box}>
                    <h1 className={styles.boxName}>GlamGarb</h1>

                    <div className={styles.boxBtns}>
                        <Link to="/ProductMan" className={styles.boxBtnsWom}></Link>
                        <Link to="/#HomePage" className={styles.boxBtnsHome}><ion-icon name="home"></ion-icon></Link>
                        <div onClick={btnWindow} className={styles.boxBtnsMenu}>☰</div>
                    </div>
                </div>
            </header>

            <div className={stateWindow ? styles.window : styles.windowVis}>
                <div className={styles.windowSocials}>
                    <div className={styles.windowVk}></div>
                    <div className={styles.windowInst}></div>
                    <div className={styles.windowTg}></div>
                    <div className={styles.windowYouTube}></div>
                </div>

                <div className={styles.windowCon1}>
                    <Link to="/ProductMan" className={styles.windowWom}>Мужской отдел</Link>
                    <a href="#NewItems" onClick={btnWindow} className={styles.windowNew}>Новинки</a>
                </div>
               
                <div className={styles.windowBox}>
                    <a href="#TShirts" onClick={btnWindow} className={styles.windowBtn}>Футболки</a>
                    <a href="#Hoodie" onClick={btnWindow} className={styles.windowBtn}>Худи</a>
                </div>
                
                <div className={styles.windowBox}>
                    <a href="#Jeans" onClick={btnWindow} className={styles.windowBtn}>Джинсы</a>
                    <a href="#Jackets" onClick={btnWindow} className={styles.windowBtn}>Куртки</a>
                </div>

                <div className={styles.windowBox}>
                    <a href="#Sneakers" onClick={btnWindow} className={styles.windowBtn}><p className={styles.windowText}>Кроссовки</p><p className={styles.windowTextSmall}>Кросы</p></a>
                    <a href="#Accessories" onClick={btnWindow} className={styles.windowBtn}><p className={styles.windowText}>Аксессуары</p><p className={styles.windowTextSmall}>Аксы</p></a>
                </div>
                
                <div className={styles.windowCon2}>
                    <Link to="/#HomePage" className={styles.windowHome}>На главную</Link>
                    <div onClick={btnWindow} className={styles.windowBack}>Закрыть</div>
                </div>
            </div>
        </>
    )
}