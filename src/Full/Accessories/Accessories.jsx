import styles from "./Accessories.module.css"

import { useState } from "react"
import { Link } from "react-router-dom"


export default function Accessories(){

    const[department, setDepartment] = useState(true)
    function manBtn(){
        if(department === false){
            setDepartment(!department)
        }
    }
    function womBtn(){
        if(department === true){
            setDepartment(!department)
        }
    }

    // .btn1{
    //     background-color: #2626B9;
    // }
    // .btn2{
    //     background-color: #FF69B4;
    // }



    return(
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.name}>Аксессуары</h1>

                <div className={styles.btns}>
                     <button onClick={manBtn} className={department ? styles.manBlue : styles.manGrey}>Мужские</button>
                     <button onClick={womBtn} className={department ? styles.womGrey : styles.womPink}>Женские</button>
                </div>



                <div className={styles.wrapperMan}>
                    <div className={department ? styles.arrowLeft : styles.arrowLeftNot}></div>
                    <div className={department ? styles.arrowRight : styles.arrowRightNot}></div>

                    <div className={department ? styles.manVis : styles.manNotVis}>
                        <Link to="/ProductMan" className={styles.manDepart1}></Link>
                        <Link to="/ProductMan" className={styles.manDepart2}></Link>
                        <Link to="/ProductMan" className={styles.manDepart3}></Link>
                        <Link to="/ProductMan" className={styles.manDepart4}></Link>
                        <Link to="/ProductMan" className={styles.manDepart5}></Link>
                        <Link to="/ProductMan" className={styles.manDepart6}></Link>
                        <Link to="/ProductMan" className={styles.manDepart7}></Link>
                    </div>
                </div>

                <div className={styles.wrapperWom}>
                    <div className={department ? styles.arrowLeftNot : styles.arrowLeft}></div>
                    <div className={department ? styles.arrowRightNot : styles.arrowRight}></div>

                    <div className={department ? styles.womNotVis : styles.womVis}>
                        <Link to="/ProductWom" className={styles.womDepart1}></Link>
                        <Link to="/ProductWom" className={styles.womDepart2}></Link>
                        <Link to="/ProductWom" className={styles.womDepart3}></Link>
                        <Link to="/ProductWom" className={styles.womDepart4}></Link>
                        <Link to="/ProductWom" className={styles.womDepart5}></Link>
                        <Link to="/ProductWom" className={styles.womDepart6}></Link>
                        <Link to="/ProductWom" className={styles.womDepart7}></Link>
                    </div>
                </div>



                {/* {department === true && (
                    <>
                        <div className={styles.man}>
                            <Link to="/Product" className={styles.manDepart1}><span className={styles.text}>Футболки</span></Link>
                            <Link to="/Product" className={styles.manDepart2}><span className={styles.text}>Худи</span></Link>
                            <Link to="/Product" className={styles.manDepart3}><span className={styles.text}>Джинсы</span></Link>
                            <Link to="/Product" className={styles.manDepart4}><span className={styles.text}>Куртки</span></Link>
                            <Link to="/Product" className={styles.manDepart5}><span className={styles.text}>Кроссовки</span></Link>
                            <Link to="/Product" className={styles.manDepart6}><span className={styles.text}>Кроссовки</span></Link>
                            <Link to="/Product" className={styles.manDepart7}><span className={styles.text}>Кроссовки</span></Link>
                        </div>
                    </>
                )}

                {department === false && (
                    <>
                        <div className={styles.wom}>
                            <Link to="/Product" className={styles.womDepart1}><span className={styles.text}>Футболки</span></Link>
                            <Link to="/Product" className={styles.womDepart2}><span className={styles.text}>Худи</span></Link>
                            <Link to="/Product" className={styles.womDepart3}><span className={styles.text}>Джинсы</span></Link>
                            <Link to="/Product" className={styles.womDepart4}><span className={styles.text}>Куртки</span></Link>
                            <Link to="/Product" className={styles.womDepart5}><span className={styles.text}>Кроссовки</span></Link>
                            <Link to="/Product" className={styles.womDepart6}><span className={styles.text}>Кроссовки</span></Link>
                            <Link to="/Product" className={styles.womDepart7}><span className={styles.text}>Кроссовки</span></Link>
                        </div>
                    </>
                )} */}
            </div>
        </>
    )
}