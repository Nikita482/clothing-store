import styles from "./Main.module.css"

import { useState } from "react"

import Window from "./Window/Window"
import NewItems from "./Product/NewItems/NewItems"
import TShirts from "./Product/TShirts/TShirts"
import Hoodie from "./Product/Hoodie/Hoodie"
import Geans from "./Product/Jeans/Jeans"
import Jackets from "./Product/Jackets/Jackets"
import Sneakers from "./Product/Sneakers/Sneakers"
import Accessories from "./Product/Accessories/Accessories"

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

                <div className={styles.marginTop}></div>
                
                <h1 className={styles.name}>Новинки <p id="NewItems" className={styles.nameId}></p></h1>
                <div className={styles.boxCard}>
                    <NewItems>
                        <button onClick={win} className={styles.order}>
                            <p className={styles.orderBtn}><ion-icon name="cart"></ion-icon></p>
                            <p>Заказать</p>
                        </button>
                    </NewItems>
                </div>

                <h1 className={styles.name}>Футболки <p id="TShirts" className={styles.nameId}></p></h1>
                <div className={styles.boxCard}>
                    <TShirts>
                        <button onClick={win} className={styles.order}>
                            <p className={styles.orderBtn}><ion-icon name="cart"></ion-icon></p>
                            <p>Заказать</p>
                        </button>
                    </TShirts>
                </div>

                <h1 className={styles.name}>Худи <p id="Hoodie" className={styles.nameId}></p></h1>
                <div className={styles.boxCard}>
                    <Hoodie>
                        <button onClick={win} className={styles.order}>
                            <p className={styles.orderBtn}><ion-icon name="cart"></ion-icon></p>
                            <p>Заказать</p>
                        </button>
                    </Hoodie>
                </div>
                
                <h1 className={styles.name}>Джинсы <p id="Jeans" className={styles.nameId}></p></h1>
                <div className={styles.boxCard}>
                    <Geans>
                        <button onClick={win} className={styles.order}>
                            <p className={styles.orderBtn}><ion-icon name="cart"></ion-icon></p>
                            <p>Заказать</p>
                        </button>
                    </Geans>
                </div>

                <h1 className={styles.name}>Куртки <p id="Jackets" className={styles.nameId}></p></h1>
                <div className={styles.boxCard}>
                    <Jackets>
                        <button onClick={win} className={styles.order}>
                            <p className={styles.orderBtn}><ion-icon name="cart"></ion-icon></p>
                            <p>Заказать</p>
                        </button>
                    </Jackets>
                </div>

                <h1 className={styles.name}>Кроссовки <p id="Sneakers" className={styles.nameId}></p></h1>
                <div className={styles.boxCard}>
                    <Sneakers>
                        <button onClick={win} className={styles.order}>
                            <p className={styles.orderBtn}><ion-icon name="cart"></ion-icon></p>
                            <p>Заказать</p>
                        </button>
                    </Sneakers>
                </div>

                <h1 className={styles.name}>Аксессуары <p id="Accessories" className={styles.nameId}></p></h1>
                <div className={styles.boxCard}>
                    <Accessories>
                        <button onClick={win} className={styles.order}>
                            <p className={styles.orderBtn}><ion-icon name="cart"></ion-icon></p>
                            <p>Заказать</p>
                        </button>
                    </Accessories>
                </div>
            </main>
        </>
    )
}