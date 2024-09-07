import styles from "./Main.module.css"

import { useState } from "react"

import Card from "./card/card"
import Window from "./Window/Window"
import TShirts from "./Product/TShirts/TShirts"

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
                    {/* <Card price = "1"
                        foto = "https://i.pinimg.com/564x/c9/34/8c/c9348c5901ea8e0fbcafd2feae7c9834.jpg"
                        description = "1 Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку.Условный оператор (тернарный оператор) позволяет записать условие и два возможных варианта значения в одну строку."
                        name = "name1"
                        idNum = "11">

                        <button onClick={win} className={styles.order}>
                            <p className={styles.orderBtn}><ion-icon name="cart"></ion-icon></p>
                            <p>Заказать</p>
                        </button>
                    </Card> */}

                    <TShirts>
                        <button onClick={win} className={styles.order}>
                            <p className={styles.orderBtn}><ion-icon name="cart"></ion-icon></p>
                            <p>Заказать</p>
                        </button>
                    </TShirts>
                </div>
            </main>
        </>
    )
}