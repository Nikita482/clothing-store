import styles from "./Window.module.css"

import { useState } from "react"

import Form from "../Form/Form"


export default function Window(props){

    const[form, setForm] = useState(true)
    const[border, setBorder] = useState(true)
    const formBtn =(event)=>{
        const main = event.target.closest('#main')
        const formSize = main.querySelector('#formSize')

        if(size1 === false){
            formSize.innerHTML = `<input type="hidden" name="Размер:" value="XS" readOnly/>`
            setForm(!form)
        }else if(size2 === false){
            setForm(!form)
            formSize.innerHTML = `<input type="hidden" name="Размер:" value="S" readOnly/>`
        }else if(size3 === false){
            setForm(!form)
            formSize.innerHTML = `<input type="hidden" name="Размер:" value="M" readOnly/>`
        }else if(size4 === false){
            setForm(!form)
            formSize.innerHTML = `<input type="hidden" name="Размер:" value="L" readOnly/>`
        }else if(size5 === false){
            setForm(!form)
            formSize.innerHTML = `<input type="hidden" name="Размер:" value="XL" readOnly/>`
        }else{
            setBorder(!border)
        }
    }

    const[size1, setSize1] = useState(true)
    const[size2, setSize2] = useState(true)
    const[size3, setSize3] = useState(true)
    const[size4, setSize4] = useState(true)
    const[size5, setSize5] = useState(true)
    const btnSize1 =()=>{
        if(size1 === true){
            if(border === false){
                setSize1(!size1)
                setBorder(true)
            }else{
                setSize1(!size1)
            }
            setSize2(true)
            setSize3(true)
            setSize4(true)
            setSize5(true)
        }else{
            setSize1(!size1)
        }
    }
    const btnSize2 =()=>{
        if(size2 === true){
            if(border === false){
                setSize2(!size2)
                setBorder(true)
            }else{
                setSize2(!size2)
            }
            setSize1(true)
            setSize3(true)
            setSize4(true)
            setSize5(true)
        }else{
            setSize2(!size2)
        }
    }
    const btnSize3 =()=>{
        if(size3 === true){
            if(border === false){
                setSize3(!size3)
                setBorder(true)
            }else{
                setSize3(!size3)
            }
            setSize1(true)
            setSize2(true)
            setSize4(true)
            setSize5(true)
        }else{
            setSize3(!size3)
        }
    }
    const btnSize4 =()=>{
        if(size4 === true){
            if(border === false){
                setSize4(!size4)
                setBorder(true)
            }else{
                setSize4(!size4)
            }
            setSize1(true)
            setSize2(true)
            setSize3(true)
            setSize5(true)
        }else{
            setSize4(!size4)
        }
    }
    const btnSize5 =()=>{
        if(size5 === true){
            if(border === false){
                setSize5(!size5)
                setBorder(true)
            }else{
                setSize5(!size5)
            }
            setSize1(true)
            setSize2(true)
            setSize3(true)
            setSize4(true)
        }else{
            setSize5(!size5)
        }
    }

    return(
        <>
            <div id="winWrapper" className={styles.wrapper}>
                <img id="winFoto" className={styles.foto} src="" />

                <div className={styles.linker}>
                    <div className={form ? styles.info : styles.infoNotVis}>
                        <h1 id="winName" className={styles.infoName}></h1>

                        <p id="winPrice" className={styles.infoPrice}></p>

                        <div className={border ? styles.infoSize : styles.infoSizeBorder}>
                            <div onClick={btnSize1} className={size1 ? styles.infoSizeBlock : styles.infoSizeBlockBorder}>XS</div>
                            <div onClick={btnSize2} className={size2 ? styles.infoSizeBlock : styles.infoSizeBlockBorder}>S</div>
                            <div onClick={btnSize3} className={size3 ? styles.infoSizeBlock : styles.infoSizeBlockBorder}>M</div>
                            <div onClick={btnSize4} className={size4 ? styles.infoSizeBlock : styles.infoSizeBlockBorder}>L</div>
                            <div onClick={btnSize5} className={size5 ? styles.infoSizeBlock : styles.infoSizeBlockBorder}>XL</div>
                        </div>
                        
                        <div className={styles.infoDesc}>
                            <div id="winDescription" className={styles.infoDescText}><p></p></div>

                            <div className={styles.infoDescEnd}></div>
                        </div>

                        <div className={styles.infoBack}>
                            {props.children}
                        </div>

                        <button onClick={formBtn} className={styles.infoOrder}>Заказать</button>
                    </div>

                    <div className={form ? styles.formNotVis : styles.form}>
                        <Form>
                            <div className={styles.formFinal} onClick={formBtn}>Назад</div>

                            <div className={styles.formInfo}>
                                <div id="formPrice"></div>
                                <div id="formName"></div>
                                <div id="formSize"></div>
                                <div id="formId"></div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}