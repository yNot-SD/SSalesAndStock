import React from 'react';
import BoxLogin from './components/BoxLogin.js'
import BoxLogo from './components/BoxLogo.js'

import './style/App.css';
import './style/login.css';
import './style/logo.css';

function App() {
    return (
        <div className="containerx">

            <div className="hr"></div>

            <div className="header">
                <h1>Use o que te faz feliz!</h1>
            </div>

            <BoxLogo></BoxLogo>


            <BoxLogin></BoxLogin>

            <footer className="footer">
                <p>CREATED BY TONY S.</p>
            </footer>
        </div >

    );
}

export default App;