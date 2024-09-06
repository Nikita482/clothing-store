import styles from "./Main.module.css"

import { useState } from "react"

import Card from "./card/card"
import Form from "./Form/Form"
import Window from "./Window/Window"

export default function Main(){
    
    const[window, setWindow] = useState(true)
    function win(event){
        if(window === true){
            setWindow(!window)

            const wrapper = event.target.closest('#wrapper') 
            const price = wrapper.querySelector('#price').textContent
            const foto = wrapper.querySelector('#foto').src
            const name = wrapper.querySelector('#name').textContent
            const description = wrapper.querySelector('#description').textContent
            const idNum = wrapper.querySelector('#idNum').textContent
    
            const main = event.target.closest('#main')
            const winWrapper = main.querySelector('#winWrapper')
            const winPrice = winWrapper.querySelector('#winPrice')
            const winFoto = winWrapper.querySelector('#winFoto')
            const winName = winWrapper.querySelector('#winName')
            const winDescription = winWrapper.querySelector('#winDescription')

            const formPrice = winWrapper.querySelector('#formPrice')
            const formName = winWrapper.querySelector('#formName')
            const formId = winWrapper.querySelector('#formId')
    
            winFoto.src = foto
            winPrice.textContent = price
            winName.textContent = name
            winDescription.textContent = description

            formName.innerHTML = `<input type="hidden" name="Название товара:"value="${name}" required></input>`
            formPrice.innerHTML = `<input type="hidden" name="Цена:"value="${price}" required></input>`
            formId.innerHTML = `<input type="hidden" name="ID:"value="${idNum}" required></input>`
            
        }else{setWindow(!window)}
    }

    return(
        <>
            <main id="main">
                <div id="window" className={window ? styles.winNotVis : styles.winVis}>
                    <Window>
                        <div onClick={win} className={styles.winVisBack}>
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </div>

                        <button className={styles.winVisBackMobule} onClick={win}>Назад</button>
                    </Window>
                </div>

                <h1 className={styles.name}>Футболки</h1>
                <div className={styles.boxCard}>
                    <Card price = "1"
                        foto = "https://i.pinimg.com/564x/c9/34/8c/c9348c5901ea8e0fbcafd2feae7c9834.jpg"
                        description = "1 Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку."
                        name = "name1"
                        idNum = "11"
                    >
                        <button onClick={win}>Данные</button>
                    </Card>
                    
                    <Card price = "2"
                        foto = "https://i.pinimg.com/474x/d6/7f/03/d67f03e241a1598d248d152f66607ea9.jpg"
                        description = "2 Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку."
                        name = "name2"
                        idNum = "22"
                    >
                        <button onClick={win}>Данные</button>
                    </Card>

                    <Card price = "3"
                        foto = "https://i.pinimg.com/474x/03/19/88/0319884005b1e73c364847a18ec60df3.jpg"
                        description = "3 Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку."
                        name = "name3"
                        idNum = "33"
                    >
                        <button onClick={win}>Данные</button>
                    </Card>

                    <Card price = "4"
                        foto = "https://i.pinimg.com/474x/b0/14/d3/b014d32c4a21188fa90d7b1c9a6ee72c.jpg"
                        description = "4 Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку."
                        name = "name4"
                        idNum = "44"
                    >
                        <button onClick={win}>Данные</button>
                    </Card>
                    <Card price = "1 111"
                        foto = "https://i.pinimg.com/564x/c9/34/8c/c9348c5901ea8e0fbcafd2feae7c9834.jpg"
                        description = "Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку."
                        name = "name1"
                        idNum = "11"
                    >
                        <button onClick={win}>Данные</button>
                    </Card>



                    {/* <Card price = "5"
                        foto = "https://i.pinimg.com/474x/b0/14/d3/b014d32c4a21188fa90d7b1c9a6ee72c.jpg"
                        description = "Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта "
                        name = "name5"
                        idNum = "55"
                    >   
                        <button onClick={win}>Данные</button>
                    </Card> */}


                    


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