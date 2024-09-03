import styles from "./Main.module.css"

import { useState } from "react"

import Card from "./card/card"
import Form from "./Form/Form"

export default function Main(){

    const[window, setWindow] = useState(true)
    const funSwitch = (event)=>{
        if(window === true){
            setWindow(!window)
            const wrapper = event.target.closest('#wrapper')
            const price = wrapper.querySelector('#price').textContent
            const idNum = wrapper.querySelector('#idNum').textContent
            const foto = wrapper.querySelector('#foto').src
            const name = wrapper.querySelector('#name').textContent
            const description = wrapper.querySelector('#description').textContent
            
            const main = event.target.closest('#main')
            const number = main.querySelector('#numer')
            const id = main.querySelector('#id')
            const windowFoto = main.querySelector('#windowFoto')
            const windowName = main .querySelector('#WindowName')
            const windowDescription = main.querySelector('#windowDescription')

            number.textContent = price;
            id.textContent = idNum
            windowFoto.src = foto
            windowName.textContent = name
            windowDescription.textContent = description

        }else{
            setWindow(!window)
            setsize1(true)
            setsize2(true)
            setsize3(true)
            setsize4(true)
            setsize5(true)
        }
    }


    const[form, setForm] = useState(true)
    const[sizeBorder, setSizeBorder] = useState(true)
    const formBtn = (event)=>{
        const windowBox = event.target.closest('#windowBox')
        
        const formInfo = windowBox.querySelector('#formInfo')
        const formPrice = windowBox.querySelector('#formPrice')
        const formId = windowBox.querySelector('#formId')

        const numer = windowBox.querySelector('#numer').textContent
        const id = windowBox.querySelector('#id').textContent

        if(size1 === false){
            formInfo.innerHTML = '<input type="hidden" name="Размер:"value="XS" required></input>'
            formPrice.innerHTML = `<input type="hidden" name="Цена:"value="${numer}" required></input>`
            formId.innerHTML = `<input type="hidden" name="Артикул:"value="${id}" required></input>`
            setForm(!form)
        }else if(size2 === false){
            formInfo.innerHTML = '<input type="hidden" name="Размер:"value="S" required></input>'
            formPrice.innerHTML = `<input type="hidden" name="Цена:"value="${numer}" required></input>`
            formId.innerHTML = `<input type="hidden" name="Артикул:"value="${id}" required></input>`
            setForm(!form)
        }else if(size3 === false){
            formInfo.innerHTML = '<input type="hidden" name="Размер:"value="M" required></input>'
            formPrice.innerHTML = `<input type="hidden" name="Цена:"value="${numer}" required></input>`
            formId.innerHTML = `<input type="hidden" name="Артикул:"value="${id}" required></input>`
            setForm(!form)
        }else if(size4 === false){
            formInfo.innerHTML = '<input type="hidden" name="Размер:"value="L" required></input>'
            formPrice.innerHTML = `<input type="hidden" name="Цена:"value="${numer}" required></input>`
            formId.innerHTML = `<input type="hidden" name="Артикул:"value="${id}" required></input>`
            setForm(!form)
        }else if(size5 === false){
            formInfo.innerHTML = '<input type="hidden" name="Размер:"value="XL" required></input>'
            formPrice.innerHTML = `<input type="hidden" name="Цена:"value="${numer}" required></input>`
            formId.innerHTML = `<input type="hidden" name="Артикул:"value="${id}" required></input>`
            setForm(!form)
        }else{
            if(sizeBorder === true){
                setSizeBorder(!sizeBorder)
            }
        }
    }



    const[size1, setsize1] = useState(true)
    const[size2, setsize2] = useState(true)
    const[size3, setsize3] = useState(true)
    const[size4, setsize4] = useState(true)
    const[size5, setsize5] = useState(true)
    const btnSize1 = ()=>{
        if(size1 === true){
            if(sizeBorder === false){
                setSizeBorder(true)
                setsize1(!size1)
            }
            setsize1(!size1)
            setsize2(true)
            setsize3(true)
            setsize4(true)
            setsize5(true)
        }else{
            setsize1(!size1)
        }
    }
    const btnSize2 = ()=>{
        if(size2 === true){
            if(sizeBorder === false){
                setSizeBorder(true)
                setsize2(!size1)
            }
            setsize2(!size1)
            setsize1(true)
            setsize3(true)
            setsize4(true)
            setsize5(true)
        }else{
            setsize2(!size2)
        }
    }
    const btnSize3 = ()=>{
        if(size3 === true){
            if(sizeBorder === false){
                setSizeBorder(true)
                setsize3(!size1)
            }
            setsize3(!size1)
            setsize1(true)
            setsize2(true)
            setsize4(true)
            setsize5(true)
        }else{
            setsize3(!size3)
        }
    }
    const btnSize4 = ()=>{
        if(size4 === true){
            if(sizeBorder === false){
                setSizeBorder(true)
                setsize4(!size1)
            }
            setsize4(!size1)
            setsize1(true)
            setsize2(true)
            setsize3(true)
            setsize5(true)
        }else{
            setsize4(!size4)
        }
    }
    const btnSize5 = ()=>{
        if(size5 === true){
            if(sizeBorder === false){
                setSizeBorder(true)
                setsize5(!size1)
            }
            setsize5(!size1)
            setsize1(true)
            setsize2(true)
            setsize3(true)
            setsize4(true)
        }else{
            setsize5(!size5)
        }
    }





    return(
        <>
            <main id="main">
                <div id="window" className={window ? styles.windowNotVis : styles.windowVis}>
                    <div className={styles.linkerFoto}>
                        <img id="windowFoto" className={styles.windowFoto} src="" />

                        <div className={styles.linkerFotoSize}>
                            <div className={sizeBorder ? styles.windowLinkerMobul : styles.windowLinkerBorderMobul}>
                                <div onClick={btnSize1} className={size1 ? styles.SizeBlockSize : styles.SizeBlockSizeBorder}>XS</div>
                                <div onClick={btnSize2} className={size2 ? styles.SizeBlockSize : styles.SizeBlockSizeBorder}>S</div>
                                <div onClick={btnSize3} className={size3 ? styles.SizeBlockSize : styles.SizeBlockSizeBorder}>M</div>
                                <div onClick={btnSize4} className={size4 ? styles.SizeBlockSize : styles.SizeBlockSizeBorder}>L</div>
                                <div onClick={btnSize5} className={size5 ? styles.SizeBlockSize : styles.SizeBlockSizeBorder}>XL</div>
                            </div>
                        </div>
                    </div>

                    <div id="windowBox" className={styles.windowLinkerFull}>
                        <div className={form ? styles.windowBox : styles.windowBoxNotVis}>
                            <h1 id="WindowName" className={styles.windowName}></h1>

                            <div className={styles.windowScroll}>
                                <div className={styles.windowShadow}></div>
                                
                                <div className={styles.windowBlock}> 
                                    <p id="windowDescription" className={styles.windowDescription}></p>
                                </div>
                            </div>

                            <div className={styles.windowSize}>
                                <div className={sizeBorder ? styles.windowLinker : styles.windowLinkerBorder}>
                                    <div onClick={btnSize1} className={size1 ? styles.SizeBlockSize : styles.SizeBlockSizeBorder}>XS</div>
                                    <div onClick={btnSize2} className={size2 ? styles.SizeBlockSize : styles.SizeBlockSizeBorder}>S</div>
                                    <div onClick={btnSize3} className={size3 ? styles.SizeBlockSize : styles.SizeBlockSizeBorder}>M</div>
                                    <div onClick={btnSize4} className={size4 ? styles.SizeBlockSize : styles.SizeBlockSizeBorder}>L</div>
                                    <div onClick={btnSize5} className={size5 ? styles.SizeBlockSize : styles.SizeBlockSizeBorder}>XL</div>
                                </div>

                                <button onClick={formBtn} className={styles.windowFormBtnMobul}>Заказать</button>
                                <h1 id="numer" className={styles.SizePrice}></h1>
                            </div>

                            <div className={styles.windowBack} onClick={funSwitch}>
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </div>

                            <button onClick={formBtn} className={styles.windowFormBtn}>Заказать</button>
                            <div className={sizeBorder ? styles.windowLinkerMobul2 : styles.windowLinkerBorderMobul2}>
                                <div onClick={btnSize1} className={size1 ? styles.SizeBlockSize : styles.SizeBlockSizeBorder}>XS</div>
                                <div onClick={btnSize2} className={size2 ? styles.SizeBlockSize : styles.SizeBlockSizeBorder}>S</div>
                                <div onClick={btnSize3} className={size3 ? styles.SizeBlockSize : styles.SizeBlockSizeBorder}>M</div>
                                <div onClick={btnSize4} className={size4 ? styles.SizeBlockSize : styles.SizeBlockSizeBorder}>L</div>
                                <div onClick={btnSize5} className={size5 ? styles.SizeBlockSize : styles.SizeBlockSizeBorder}>XL</div>
                            </div>
                            <div className={styles.windowBacsMobule} onClick={funSwitch}>Назад</div>


                            <div className={styles.windowNone}>
                                <p id="id">123</p>
                            </div>
                        </div>

                        <div className={form ? styles.windowFormNotVis : styles.windowForm}>
                            <Form>
                                <div className={styles.final} onClick={formBtn}>Назад</div>

                                <div id="formInfo"></div>
                                <div id="formPrice"></div>
                                <div id="formId"></div>
                            </Form>
                        </div>
                    </div>
                </div>



                <h1 className={styles.name}>Футболки</h1>
                <div className={styles.tShirts}>
                    <Card price = "1 111"
                        foto = "https://i.pinimg.com/564x/c9/34/8c/c9348c5901ea8e0fbcafd2feae7c9834.jpg"
                        description = "Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку."
                        name = "name1"
                        idNum = "11"
                    >
                        <button onClick={funSwitch} className={styles.boxBtn}>Данные</button>
                    </Card>

                    <Card price = "2 222"
                        foto = "https://i.pinimg.com/474x/d6/7f/03/d67f03e241a1598d248d152f66607ea9.jpg"
                        description = "Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку."
                        name = "name2"
                        idNum = "22"
                    >
                        <button onClick={funSwitch} className={styles.boxBtn}>Данные</button>
                    </Card>

                    <Card price = "3"
                        foto = "https://i.pinimg.com/474x/03/19/88/0319884005b1e73c364847a18ec60df3.jpg"
                        description = "Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку."
                        name = "name3"
                        idNum = "33"
                    >
                        <button onClick={funSwitch} className={styles.boxBtn}>Данные</button>
                    </Card>

                    <Card price = "4"
                        foto = "https://i.pinimg.com/474x/b0/14/d3/b014d32c4a21188fa90d7b1c9a6ee72c.jpg"
                        description = "Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку."
                        name = "name4"
                        idNum = "44"
                    >
                        <button onClick={funSwitch} className={styles.boxBtn}>Данные</button>
                    </Card>



                    <Card price = "5"
                        foto = "https://i.pinimg.com/474x/b0/14/d3/b014d32c4a21188fa90d7b1c9a6ee72c.jpg"
                        description = "Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта "
                        name = "name5"
                        idNum = "55"
                    >
                        <button onClick={funSwitch} className={styles.boxBtn}>Данные</button>
                    </Card>


                    


                    {/* <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/> */}
                </div>

                {/* <h1 className={styles.name}>Худи</h1>
                <div className={styles.tShirts}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

                <h1 className={styles.name}>Джинсы</h1>
                <div className={styles.tShirts}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

                <h1 className={styles.name}>Куртки</h1>
                <div className={styles.tShirts}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

                <h1 className={styles.name}>Аксессуары</h1>
                <div className={styles.tShirts}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

                <h1 className={styles.name}>Кросовки</h1>
                <div className={styles.tShirts}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div> */}
            </main>
        </>
    )
}