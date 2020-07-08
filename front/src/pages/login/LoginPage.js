import React from 'react';
import BoxLogin from '../../components/loginComps/BoxLogin.js'
import BoxLogo from '../../components/loginComps/BoxLogo.js'

import '../../style/App.css';
import '../../style/login.css';
import '../../style/logo.css';

function LoginPage() {
    return (
        <div className="containerx">
            <div className="header">
                <h1>Use o que te faz feliz!</h1>
            </div>

            <BoxLogo></BoxLogo>

            <div className="hr"></div>
            
            <BoxLogin></BoxLogin>

            <footer className="footer font-italic">
                <p className="blockquote-footer">CREATED BY TONY S.</p>
            </footer>
        </div >

    );
}

export default LoginPage;