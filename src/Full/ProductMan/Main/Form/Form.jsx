import styles from "./Form.module.css"


export default function Form(props){
    return(
        <>
            <form action="https://api.web3forms.com/submit" method="POST">

                <input type="hidden" name="access_key" value="343878e1-c9ae-4e2b-9d23-0bbde5c07760" />
                <input type="hidden" name="Название формы:" value="Мужская карточка товара" readOnly/> 

                <div className={styles.pole}>
                    <label className={styles.label}>Имя:</label>
                    <input className={styles.massage} type="text" placeholder="Имя:" name="Имя:" required></input>
                </div>   

                <div className={styles.pole}>
                    <label className={styles.label}>номер:</label>
                    <input className={styles.massage} type="tel" placeholder="номер:" name="номер:" pattern="[0-9\s\-\+\(\)]*" required></input>
                </div> 

                <div className={styles.pole}>
                    <label className={styles.label}>Адресс:</label>
                    <input className={styles.massage} type="text" placeholder="Адресс достваки:" name="Адресс:" required></input>
                </div>

                <div className={styles.poleData}>
                    <label className={styles.labelData}>Дата:</label>
                    <input className={styles.massageData} type="date" placeholder="Дата достваки:" name="Дата:" required></input>
                </div> 

                <div className={styles.poleTime}>
                    <label className={styles.labelTime}>Время:</label>
                    <input className={styles.massage} type="time" placeholder="Время достваки:" name="Время:" required></input>
                </div> 

                <div className={styles.linker}>
                    {props.children}

                    <input className={styles.final} type="submit" value="Отправить"></input>
                </div>
            </form>
        </>
    )
}


