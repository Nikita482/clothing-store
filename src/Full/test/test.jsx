import styles from './test.module.css'


export default function Product(props){
  return(
    <>
      <div className={styles.wrapper}>
        {props.children}
      </div>
    </>
  )
}