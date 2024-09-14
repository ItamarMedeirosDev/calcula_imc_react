import React, { useState, useEffect } from 'react';
import styles from './Form.module.css';

const Form = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);

  
  const calcIMC = (peso, altura) => {
    const alturaMetros = altura / 100; 
    return peso / (alturaMetros * alturaMetros); 
  }

  
  useEffect(() => {
    if (peso && altura) {
      const resultadoImc = calcIMC(parseFloat(peso), parseFloat(altura));
      setImc(resultadoImc.toFixed(2)); 
    } else {
      setImc(null); 
    }
  }, [peso, altura]); 

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="peso">Peso:</label>
          <input
            className={styles.input}
            placeholder="Digite seu peso em kg"
            type="number"
            id="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="altura">Altura:</label>
          <input
            className={styles.input}
            placeholder="Digite sua altura em cm"
            type="number"
            id="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
      </form>
      <p>Seu IMC é {imc}</p>
    </div>
  )
}

export default Form;
