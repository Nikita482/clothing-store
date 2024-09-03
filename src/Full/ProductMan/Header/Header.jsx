import styles from "./Header.module.css"


export default function Header(){
    return(
        <>
            <header>
                <div className={styles.headerBox}>
                    <h1 className={styles.headerBoxName}>GlamGarb</h1>
                </div>

                <div className={styles.headerMenu}>

                </div>
            </header>
        </>
    )
}