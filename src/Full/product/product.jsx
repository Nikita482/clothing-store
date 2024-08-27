import styles from './product.module.css';

import { useState } from 'react';


export default function Product(){

  const[state, setState] = useState(true)
  function click(){
    setState(!state)
  }




  return(
    <>
      <div className={styles.box}>
        <button onClick={click}>click</button>

        <div className={styles.test}>
          <button className={styles.btn1}>click1</button>
        </div>

        <div className={state ? styles.wrapper1 : styles.wrapper2}>
          <button className={styles.btn2}>click2</button>
        </div>
      </div>
    </>
  )
}