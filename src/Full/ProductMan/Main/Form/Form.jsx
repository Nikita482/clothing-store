import styles from "./Form.module.css"


export default function Form(props){
    return(
        <>
            <form action="https://api.web3forms.com/submit" method="POST">

                <input type="hidden" name="access_key" value="343878e1-c9ae-4e2b-9d23-0bbde5c07760" />
                <input type="hidden" name="Название формы:" value="Карточка товара" readOnly/> 

                <div className={styles.pole}>
                    <label>Имя:</label>
                    <input className={styles.massage} placeholder="Имя:" name="Имя:" required></input>
                </div>   

                <div className={styles.pole}>
                    <label>номер:</label>
                    <input className={styles.massage} placeholder="номер:" name="номер:" required></input>
                </div> 

                <div className={styles.pole}>
                    <label>Адресс:</label>
                    <input className={styles.massage} placeholder="Адресс:" name="Адресс:" required></input>
                </div>

                <div className={styles.pole}>
                    <label>Дата:</label>
                    <input className={styles.massage} placeholder="Дата:" name="Дата:" required></input>
                </div> 

                <div className={styles.pole}>
                    <label>Время:</label>
                    <input className={styles.massage} placeholder="Время:" name="Время:" required></input>
                </div> 

                <div className={styles.linker}>
                    {props.children}

                    <input className={styles.final} type="submit" value="Отправить"></input>
                </div>
            </form>
        </>
    )
}


