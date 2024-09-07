import styles from "./Card.module.css"


export default function Card(props){
    return(
        <>
            <div id="wrapper" className={styles.wrapper}>
                <img id="foto" className={styles.foto} src={props.foto} />

                <div className={styles.box}>
                    {props.children}
                </div>

                <div className={styles.info}>
                    <h1 id="price">{props.price}₽</h1>
                    <p id="name">{props.name}</p>
                    <p id="description">{props.description}</p>
                    <p id="idNum">{props.idNum}</p>
                </div>
            </div>
        </>
    )
}
