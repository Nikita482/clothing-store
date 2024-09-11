import styles from "./Accessories.module.css"

import { useState } from "react"
import { HashLink as Link } from 'react-router-hash-link';


export default function Accessories(){

    // const[department, setDepartment] = useState(true)
    // function manBtn(){
    //     if(department === false){
    //         setDepartment(!department)
    //     }
    // }
    // function womBtn(){
    //     if(department === true){
    //         setDepartment(!department)
    //     }
    // }

    // .btn1{
    //     background-color: #2626B9;
    // }
    // .btn2{
    //     background-color: #FF69B4;
    // }


    const[department, setDepartment] = useState(true)

    const manClick = ()=>{
        if(department === false){
            setDepartment(!department)
        }
    }

    const womClick = ()=>{
        if(department === true){
            setDepartment(!department)
        }
    }




    return(
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.name}>Аксессуары</h1>

                <div className={styles.wrapperBtns}>
                    <button onClick={manClick} className={department ? styles.wrapperManBlue : styles.wrapperMan}>Мужские</button>
                    <button onClick={womClick} className={department ? styles.wrapperWom : styles.wrapperWomPink}>Женские</button>
                </div>

                <div className={styles.wrapperBox}>
                    <div className={department ? styles.wrapperBoxMan : styles.wrapperBoxManNotVis}>
                        <div className={styles.arrowLeft}><ion-icon name="arrow-round-back"></ion-icon></div>
                        <div className={styles.arrowRight}><ion-icon name="arrow-round-forward"></ion-icon></div>

                        <div className={styles.wrapperDepart}>
                            <Link to="/ProductMan#Accessories" className={styles.manDepart1}></Link>
                            <Link to="/ProductMan#Accessories" className={styles.manDepart2}></Link>
                            <Link to="/ProductMan#Accessories" className={styles.manDepart3}></Link>
                            <Link to="/ProductMan#Accessories" className={styles.manDepart4}></Link>
                            <Link to="/ProductMan#Accessories" className={styles.manDepart5}></Link>
                            <Link to="/ProductMan#Accessories" className={styles.manDepart6}></Link>
                            <Link to="/ProductMan#Accessories" className={styles.manDepart7}></Link>
                        </div>
                    </div>

                    <div className={department ? styles.wrapperBoxWomNotVis : styles.wrapperBoxWom}>
                        <div className={styles.wrapperBoxWomCont}>
                            <div className={styles.arrowLeft}><ion-icon name="arrow-round-back"></ion-icon></div>
                            <div className={styles.arrowRight}><ion-icon name="arrow-round-forward"></ion-icon></div>

                            <div className={styles.wrapperDepartWom}>
                                <Link to="/ProductWom#Accessories" className={styles.womDepart1}></Link>
                                <Link to="/ProductWom#Accessories" className={styles.womDepart2}></Link>
                                <Link to="/ProductWom#Accessories" className={styles.womDepart3}></Link>
                                <Link to="/ProductWom#Accessories" className={styles.womDepart4}></Link>
                                <Link to="/ProductWom#Accessories" className={styles.womDepart5}></Link>
                                <Link to="/ProductWom#Accessories" className={styles.womDepart6}></Link>
                                <Link to="/ProductWom#Accessories" className={styles.womDepart7}></Link>
                            </div>
                        </div>
                    </div>
                </div>





                {/* <div className={styles.wrapperMan}>
                    <div className={department ? styles.arrowLeft : styles.arrowLeftNot}></div>
                    <div className={department ? styles.arrowRight : styles.arrowRightNot}></div>

                    <div className={department ? styles.manVis : styles.manNotVis}>
                        <Link to="/ProductMan#Accessories" className={styles.manDepart1}></Link>
                        <Link to="/ProductMan#Accessories" className={styles.manDepart2}></Link>
                        <Link to="/ProductMan#Accessories" className={styles.manDepart3}></Link>
                        <Link to="/ProductMan#Accessories" className={styles.manDepart4}></Link>
                        <Link to="/ProductMan#Accessories" className={styles.manDepart5}></Link>
                        <Link to="/ProductMan#Accessories" className={styles.manDepart6}></Link>
                        <Link to="/ProductMan#Accessories" className={styles.manDepart7}></Link>
                    </div>
                </div>

                <div className={styles.wrapperWom}>
                    <div className={department ? styles.arrowLeftNot : styles.arrowLeft}></div>
                    <div className={department ? styles.arrowRightNot : styles.arrowRight}></div>

                    <div className={department ? styles.womNotVis : styles.womVis}>
                        <Link to="/ProductWom#Accessories" className={styles.womDepart1}></Link>
                        <Link to="/ProductWom#Accessories" className={styles.womDepart2}></Link>
                        <Link to="/ProductWom#Accessories" className={styles.womDepart3}></Link>
                        <Link to="/ProductWom#Accessories" className={styles.womDepart4}></Link>
                        <Link to="/ProductWom#Accessories" className={styles.womDepart5}></Link>
                        <Link to="/ProductWom#Accessories" className={styles.womDepart6}></Link>
                        <Link to="/ProductWom#Accessories" className={styles.womDepart7}></Link>
                    </div>
                </div> */}
            </div>
        </>
    )
}