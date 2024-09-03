import styles from "./Card.module.css"

// import { useState } from "react"


export default function Card(props){

    // const click = (event)=>{
    //     const wrapper = event.target.closest('#wrapper')
    //     const price = wrapper.querySelector('#price')
    //     const foto = wrapper.querySelector('#foto')
    //     console.log(price.textContent)
    //     console.log(foto.src)
    
        
    //     найти все нужную инфу из wrapper
    
    //     const div = document.createElement('div');
    //     Object.assign(div.style, {
    //         width: '90%',
    //         height: '90%',
    //         position: 'fixed',
    //         top: '50%',
    //         left: '50%',
    //         transform: 'translate(-50%, -50%)',
    //         zIndex: '1',
    //         margin: '0',
    //         backgroundColor: 'red',
    //         borderRadius: '30px',
    //     });
    
    //     div.innerHTML = `
    //         <h1>12345</h1>
    //         ${price}
    //         ${foto}
    //     `
    
    //     wrapper.appendChild(div)
    
    // }

    return(
        <>
        
            <div id="wrapper" className={styles.wrapper}>
                <img id="foto" className={styles.foto} src={props.foto} />

                <div className={styles.box}>
                    <h1 id="price" className={styles.boxPrice}>{props.price}₽</h1>
                    
                    {props.children}
                </div>

                <button className={styles.order}>
                    <p className={styles.orderBtn}><ion-icon name="cart"></ion-icon></p>
                    Заказать
                </button>

                <div className={styles.info}>
                    <p id="name">{props.name}</p>
                    <p id="description">{props.description}</p>
                    <p id="idNum">{props.idNum}</p>
                </div>
            </div>
        </>
    )
}
