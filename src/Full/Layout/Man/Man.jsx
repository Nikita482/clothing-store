import styles from "./Man.module.css"

import { HashLink as Link } from 'react-router-hash-link';


export default function Man(){
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.wrapperTop}>
                    <Link to="/ProductMan#TShirts" className={styles.department1}><span className={styles.text}>Футболки</span></Link>
                    <Link to="/ProductMan#Hoodie" className={styles.department2}><span className={styles.text}>Худи</span></Link>
                </div>

                <div className={styles.wrapperBottom}>
                    <Link to="/ProductMan#Jeans" className={styles.department3}><span className={styles.text1}>Джинсы</span></Link>
                    <Link to="/ProductMan#Jackets" className={styles.department4}><span className={styles.text2}>Куртки</span></Link>
                    <Link to="/ProductMan#Sneakers" className={styles.department5}><span className={styles.text3}>Кроссовки</span></Link>
                </div>
            </div>

            <h1 className={styles.mobuleName}>Мужской отдел</h1>
            <div className={styles.mobuleWrapper}>
                <Link to="/ProductMan#TShirts" className={styles.MobuleDepartment1}><span className={styles.mobuleText}>Футболки</span></Link>
                <Link to="/ProductMan#Hoodie" className={styles.MobuleDepartment2}><span className={styles.mobuleText}>Худи</span></Link>
                <Link to="/ProductMan#Jeans" className={styles.MobuleDepartment3}><span className={styles.mobuleText}>Джинсы</span></Link>
                <Link to="/ProductMan#Jackets" className={styles.MobuleDepartment4}><span className={styles.mobuleText}>Куртки</span></Link>
                <Link to="/ProductMan#Sneakers" className={styles.MobuleDepartment5}><span className={styles.mobuleText}>Кроссовки</span></Link>
            </div>
        </>
    )
}