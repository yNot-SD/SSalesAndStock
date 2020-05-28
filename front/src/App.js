import React from 'react';
import './App.css';

function App() {
  return (
    <div className="containerx">

      <div id="bolinhas"></div>

      {/* <header className="header">
      </header> */}
        <div className="use">
          <h1>Use o que te faz feliz</h1>
        <div className="traco"></div>
        </div>
        

      <div className="boxLogo">
        <div className="logo">
          <img src="./assets/logoCS.png" alt="logocs" />


          <div className="textCS">
            <h1>CARAMELLO</h1>
            <h2>SHOES</h2>
          </div>

        </div>
      </div>


      <div className="boxLogin">
        <h1>Entrar no Sistema</h1>

        <i className="fa fa-user" aria-hidden="true"></i>
        <input className="inputLogin" type="text" placeholder="Login" />

        <i className="fa fa-lock" aria-hidden="true"></i>
        <input className="inputLogin" type="text" placeholder="Senha" />

        <button>Entrar</button>
      </div>

      <footer className="footer">
        <p>CREATED BY TONY S.</p>
      </footer>
    </div>

  );
}

export default App;
