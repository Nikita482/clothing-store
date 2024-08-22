import styles from "./mainMan.module.css"

import { Link } from "react-router-dom"


export default function MainMan(){
    return(
        <>
            <div className={styles.main}>
                <div className={styles.mainLeftBox}>
                    <div className={styles.mainLeftBoxTop}>
                        <Link to="/Product" className={styles.mainLeftBoxTopLeft}>Футболки</Link>

                        <div className={styles.mainLeftBoxTopRight}>
                            <Link to="/Product" className={styles.mainLeftBoxTopRightTop}>Худи</Link>
                            <Link to="/Product" className={styles.mainLeftBoxTopRightBottom}>Куртки</Link>
                        </div>
                    </div>
                    
                    <div className={styles.mainLeftBoxBottom}>

                    </div>
                </div>

                <div className={styles.mainRightBox}>
                    <Link to="/Product" className={styles.mainRightBoxTop}>Джинсы</Link>
                    <Link to="/Product" className={styles.mainRightBoxBottom}>123</Link>
                </div>
            </div>
        </>
    )
}