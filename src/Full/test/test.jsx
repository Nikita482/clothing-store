import styles from "./test.module.css"

import { useRef } from "react"


export default function Test(){

    const stateRef = useRef(null)

    return(
        <>
            <div className={styles.wrapper}>


                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
            </div>
        </>
    )
}