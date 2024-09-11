import { HashLink as Link } from 'react-router-hash-link';
import styles from "./fotter.module.css"


export default function Fotter(){
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.wrapperBox}>
                    <div className={styles.department1}>
                        <h1 className={styles.name}>Контактная информация</h1>
                        
                        <div className={styles.depBox}>
                            <p className={styles.box}>Менеджер</p>
                            <p className={styles.box}>+1-123-456-78-90</p>
                            <p className={styles.box}>info@gmail.com</p>
                            <p className={styles.box}>часы работы: 10:00-16:00</p>
                        </div>
                    </div>

                    <div className={styles.department2}>
                        <h1 className={styles.name}>Программа лояльности</h1>

                        <div className={styles.depBox}>
                            <p className={styles.box}>В день рождения скидка 30%!</p>
                            <p className={styles.box}>Получи скидку 50% за приглашение друга!</p>
                            <p className={styles.box}>Получи нашу карту и кобы баллы за покупку!</p>
                            <p className={styles.box}>купоны за репост нашего магазина!</p>
                        </div>
                    </div>

                    <div className={styles.linker}>
                        <div className={styles.department3}>
                            <h1 className={styles.name}>Оплата</h1>

                            <div className={styles.depBox}>
                                <p className={styles.box}>1. Наличные</p>
                                <p className={styles.box}>2. Карты</p>
                                <p className={styles.box}>3. Переводы</p>
                                <p className={styles.box}>4. Расрочка</p>
                            </div>
                        </div>

                        <div className={styles.department4}>
                            <h1 className={styles.name}>Адреса</h1>

                            <div className={styles.depBox}>
                                <p className={styles.box}>1. Улица Ленина дом 10</p>
                                <p className={styles.box}>2. Улица Шевченко дом 25</p>
                                <p className={styles.box}>3. Улица Тверская дом 7</p>
                                <p className={styles.box}>4. Проспект Победы дом 30</p>
                            </div>
                        </div>

                        <div className={styles.department5}>
                            <div className={styles.socials}>
                                <div className={styles.socialsBox}>
                                    <div className={styles.Vk}></div>
                                    <div className={styles.Inst}></div>
                                </div>

                                <div className={styles.socialsBox}>
                                    <div className={styles.Tg}></div>
                                    <div className={styles.You}></div> 
                                </div>
                            </div>

                            <div className={styles.btnInfo}>
                                <Link to="/Info#anchorInfo" className={styles.btn}>Узнать больше</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}