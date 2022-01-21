import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import math from '../math/math';
import Button from './components/Button';





const CalculatorContent = (type) => {


  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

 

  const handleButtonPress = content => () => {
    const num = parseFloat(value);

    if (content === "AC") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === "±") {
      setValue((num * -1).toString());
      return;
    }

    if (content === "%") {
      setValue((num / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === ".") {
      if (value.includes(".")) return;

      setValue(value + ".");
      return;
    }

    if (content === "+") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("+");
      return;
    }
    if (content === "−") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("−");
      return;
    }
    if (content === "×") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("×");
      return;
    }
    if (content === "÷") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("÷");
      return;
    }

    if (content === "=") {
      if (!operator) return;

      if (operator === "+") {
        setValue((memory + parseFloat(value)).toString());
      } else if (operator === "−") {
        setValue((memory - parseFloat(value)).toString());
      } else if (operator === "×") {
        setValue((memory * parseFloat(value)).toString());
      } else if (operator === "÷") {
        setValue((memory / parseFloat(value)).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }

    if (value[value.length - 1] === ".") {
      setValue(value + content);
    } else {
      setValue(parseFloat(num + content).toString());
    }
  }; 
   


  // const numberDigits = (i) => {

  //   const digits = [];

  //   for ( i = 1; i < 10; i++){
  //     digits.push(
  //       <button    onButtonClick={handleButtonPress} key={i}>{i}</button>
  //     )
  //   }

  //   return digits;
  // }

  
  
  
        return (
          
          <div className={styles.content}>
            <div className={styles.container}>
            
                <div className={styles.span} >{math(value)}</div>
                
                

                 <div className={styles.digitsTop}>
                 <Button content="AC" type="grey" onButtonClick={handleButtonPress} >AC</Button>
                 <Button content="±"  type="grey" onButtonClick={handleButtonPress}>+/-</Button>
                 <Button content="%"  type="grey" onButtonClick={handleButtonPress}>%</Button>
               </div>

                <div className={styles.digitsNumbers} >
                <Button content="1" type="button" onButtonClick={handleButtonPress} >1</Button>
                <Button content="2" type="button" onButtonClick={handleButtonPress}>2</Button>
                <Button content="3" type="button" onButtonClick={handleButtonPress}>3</Button>
                <Button content="4" type="button" onButtonClick={handleButtonPress}>4</Button>
                <Button content="5" type="button" onButtonClick={handleButtonPress}>5</Button>
                <Button content="6" type="button" onButtonClick={handleButtonPress}>6</Button>
                <Button content="7" type="button"onButtonClick={handleButtonPress}>7</Button>
                <Button content="8" type="button" onButtonClick={handleButtonPress}>8</Button>
                <Button content="9" type="button" onButtonClick={handleButtonPress}>9</Button>
                  <Button content="0" type="button" onButtonClick={handleButtonPress}>0</Button>
                  <Button className={styles.pointer} type="button" onButtonClick={handleButtonPress} content=".">.</Button>
                </div>
                  

                  <div className={styles.operatorsRight} >
                    <Button content="÷" type = 'orange' onButtonClick={handleButtonPress}>÷</Button>
                    <Button content="×" type = 'orange' onButtonClick={handleButtonPress}>×</Button>
                    <Button content="−" type = 'orange' onButtonClick={handleButtonPress}>−</Button>
                    <Button content="+" type = 'orange' onButtonClick={handleButtonPress}>+</Button>
                    <Button content="=" type = 'orange' onButtonClick={handleButtonPress}>=</Button>
                  
                  </div>

               

               

              

            </div>

          </div>
           
        )
    
        
}

export default CalculatorContent;