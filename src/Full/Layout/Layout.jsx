import styles from "./Layout.module.css"

import { useState } from "react"

import MainMan from "./mainMan/mainMan"

export default function Layout(){
    
    const[window, setWindow] = useState(true)
    const menu = () =>{
        setWindow(!window)

    }

    // 1 window закрыаетс при нажатии на любую из кнопак

    return(
        <>



            <div className={styles.wrapper}>
                <div className={styles.box}>
                    <h1 className={styles.name}>GlamGarb</h1>

                    <div onClick={menu} className={styles.btnMenu}>☰</div>
                    
                </div>

                <div className={styles.menu}>
                    <div className={styles.leftBox}>
                        <button className={styles.leftBtn}> Мужская одежда</button>
                        <button className={styles.CenterBtn}>Женская одежда</button>
                        <button className={styles.CenterBtn}>Помощь</button>
                        <button className={styles.CenterBtn}>Связь с нами</button>
                    </div>

                    <div className={styles.rightBox}>
                        <div className={styles.vk}></div>
                        <div className={styles.inst}></div>
                        <div className={styles.tg}></div>
                        <div className={styles.youTube}></div>
                    </div>
                </div>
            </div>

            <div className={window ? styles.windowVisible : styles.windowNotVisible}>
                <div className={styles.socials}>
                    <div className={styles.vk}></div>
                    <div className={styles.inst}></div>
                    <div className={styles.tg}></div>
                    <div className={styles.youTube}></div>
                </div>

                <div className={styles.btnBox}>
                    <button className={styles.chapter}> Мужская одежда</button>
                    <button className={styles.chapter}>Женская одежда</button>
                    <button className={styles.chapter}>Помощь</button>
                    <button className={styles.chapter}>Связь с нами</button>
                    <button onClick={menu} className={styles.chapterBack}>Закрыть</button>
                </div>
            </div>

            <MainMan/>
        </>
    )
}

// ☰