import React from "react";

import Calculator from './main/Calculator';
import GlobalStyles from './styles';

const  App  = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Calculadora</h1>
        </header>
        <p className="App-intro">
          Por que o 3 e o 7 não podem se casar? <br />

          Porque são primos. O que é uma pena, pois eles formariam um casal 10. 
        </p>
          <Calculator />
          <GlobalStyles />
        </div>
    );
}

export default App