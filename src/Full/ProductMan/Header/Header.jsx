import styles from "./Header.module.css"

import { useState } from "react"
import { Link } from "react-router-dom"


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
                        <Link to="/ProductWom" className={styles.boxBtnsWom}></Link>
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

                <Link to="/ProductWom" className={styles.windowBtnWom}>Женский отдел</Link>
                <div className={styles.boxA}>
                    <a href="#TShirts" className={styles.windowBtn}>Футболки</a>
                    <a href="#Hoodie" className={styles.windowBtn}>Худи</a>
                </div>

                <div className={styles.boxA}>
                    <a href="#Jeans" className={styles.windowBtn}>Джинсы</a>
                    <a href="#Jackets" className={styles.windowBtn}>Куртки</a>
                </div>

                <div className={styles.boxA}>
                    <a href="#Sneakers" className={styles.windowBtn}><p className={styles.windowText}>Кроссовки</p><p className={styles.windowTextSmall}>Кросы</p></a>
                    <a href="#Accessories" className={styles.windowBtn}><p className={styles.windowText}>Аксессуары</p><p className={styles.windowTextSmall}>Аксы</p></a>
                </div>
               
                <div className={styles.boxA}>
                    <Link to="/ProductWom" className={styles.windowBtnWomMobul}>Женский отдел</Link>
                    <div onClick={btnWindow} className={styles.windowBack}>Закрыть</div>
                </div>
            </div>
        </>
    )
}