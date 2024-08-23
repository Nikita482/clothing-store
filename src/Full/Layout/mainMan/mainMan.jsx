import styles from "./mainMan.module.css"

import { Link } from "react-router-dom"


export default function MainMan(){
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.fotoTop}>
                    <div className={styles.chapter1}>

                    </div>

                    <div className={styles.chapter2}>

                    </div>
                </div>

                <div className={styles.fotoBottom}>
                    <div className={styles.chapter3}>

                    </div>

                    <div className={styles.chapter4}>

                    </div>

                    <div className={styles.chapter5}>

                    </div>
                </div>
            </div>
        </>
    )
}