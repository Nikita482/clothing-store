import styles from "./help.module.css"


export default function Help(props){
    return(
        <>
            <div className={styles.wrapper}>
                <form action="https://api.web3forms.com/submit" method="POST">

                    <input type="hidden" name="access_key" value="343878e1-c9ae-4e2b-9d23-0bbde5c07760" />
                    <input type="hidden" name="Название формы:" /* value={props.nameForm} */ readOnly/>{/* Название формы через props */}
                    
                    <h1 className={styles.name}>Тех поддержка</h1>

                    <div className={styles.pole}>
                        <label className={styles.nameUser}>Имя:</label>
                        <input className={styles.input} placeholder="Ваше имя:" name="Имя:" required></input>
                    </div>  

                    <div className={styles.pole}>
                        <label className={styles.email}>email:</label>
                        <input className={styles.input} type="email" placeholder="Ваш email:" name="email:" required></input>
                    </div>  

                    <div className={styles.poleMassage}>
                        <label className={styles.sms}>Сообщение:</label>
                        <label className={styles.smsMobule}>Sms:</label>
                        <textarea className={styles.massage} placeholder="чем вам помочь?" name="Сообщение:" required></textarea>
                    </div>  

                    <div className={styles.linker}>
                        <input className={styles.final} type="submit" value="Отправить">{/* кнопка отправить */}</input>
                        
                        {props.children}
                    </div>
                </form>
            </div>
        </>
    )
}