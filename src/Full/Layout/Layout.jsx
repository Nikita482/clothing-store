import styles from "./Layout.module.css"

import { useState } from "react"
import { useEffect } from "react"

import Man from "./Man/Man"
import Wom from "./Wom/Wom"
import Help from "./help/help"

export default function Layout(){
    
    const[popupWindow, setWindow] = useState(true)
    const menu = () =>{
        if(help === false){
            setHelp(!help)
            setWindow(!popupWindow)
        }else{
            setWindow(!popupWindow)
        }
    }


    const[help, setHelp] = useState(true)
    function helpClick(){
        if(popupWindow === false){
            setHelp(!help)
            setWindow(!popupWindow)
        }else{
            setHelp(!help)
        }
    }

    const helpBack = () =>{
        setHelp(!help)
    }


    const[wom, setWom] = useState(true)
    function womBtn(){
        if(wom === true){
            setWom(!wom)
        }
    }
    function manBtn(){
        if(wom === false){
            setWom(!wom)
        }
    }


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                if (!sessionStorage.getItem('reloaded')) {
                    sessionStorage.setItem('reloaded', 'true');
                    window.location.reload();
                }
            } else {
                sessionStorage.removeItem('reloaded');
            }
        };
        window.addEventListener("resize", handleResize);
        // Выполняем проверку при первоначальной загрузке
        handleResize();

    }, []);

    // 1 window закрыаетс при нажатии на любую из кнопак

    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.box}>
                    <h1 className={styles.name}>GlamGarb</h1>

                    <div className={styles.boxBtn}>
                        <a href="#department" onClick={womBtn} className={styles.btnWom}></a>
                        <a href="#department" onClick={manBtn} className={styles.btnMan}></a>
                        <div onClick={menu} className={styles.btnMenu}>☰</div>
                    </div>
                </div>

                <div className={styles.menu}>
                    <div className={styles.leftBox}>
                        <a href="#department" onClick={manBtn} className={wom ? styles.leftBtnBlue : styles.leftBtn}>Мужская одежда</a>
                        <a href="#department" onClick={womBtn} className={wom ? styles.CenterBtn : styles.CenterBtnPink}>Женская одежда</a>
                        <button onClick={helpClick} className={styles.CenterBtn}>Помощь</button>
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
            
            <div className={popupWindow ? styles.windowVisible : styles.windowNotVisible}>
                <div className={styles.socials}>
                    <div className={styles.vk}></div>
                    <div className={styles.inst}></div>
                    <div className={styles.tg}></div>
                    <div className={styles.youTube}></div>
                </div>

                <div className={styles.btnBox}>
                    <div className={styles.linker1}>
                        <button className={styles.chapter}>Мужская одежда</button>
                        <button className={styles.chapter}>Женская одежда</button>
                    </div>
                    
                    <div className={styles.linker2}>
                        <button onClick={helpClick} className={styles.chapter}>Помощь</button>
                        <button className={styles.chapter}>Связь с нами</button>
                    </div>

                    <button onClick={menu} className={styles.chapterBack}>Закрыть</button>
                </div>
            </div>

            <div className={help ? styles.helpNotVis : styles.helpVis}>
                <Help>
                    <h1 onClick={helpBack} className={styles.btnBack}>Закрыть</h1>
                </Help>
            </div>

            <div id="department" className={styles.anchor}></div>

            <div className={styles.departments}>
                <Man/>
                <div className={wom ? styles.departmentWomNotVis : styles.departmentWomVis}>
                    <Wom/>
                </div>
            </div>
        </>
    )
}

// ☰