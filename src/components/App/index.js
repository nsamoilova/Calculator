import React from 'react';
import CalculatorContent from '../CalculatorContent'
import styles from './style.module.scss'
class App extends React.Component {
    render() {
        return (
            <div className={styles.container}>
              
              <CalculatorContent />
              
            </div>
        )
    }
}

export default App;