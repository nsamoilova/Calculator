import React from "react";
import styles from './style.module.scss'

const Button = ({ content, onButtonClick, type }) => {
    let style 
    type === "orange" && (style = (styles.button + ' ' + styles.orange )) || type == "grey" && (style = (styles.button + ' ' + styles.grey ) ) || type == "button" && (style = (styles.button + ' ' + styles.button ) )
    
    return (
      
        <div
        className={style}
        onClick={onButtonClick(content)}>

          {content}
        </div>
      );
}

export default Button;