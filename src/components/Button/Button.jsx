import React from 'react'
import styles from "./Button.module.css";
const Button = ({children}) => {
  return (
    <div>
      <button className={styles.btn}>{children}</button>
    </div>
  )
}

export default Button
