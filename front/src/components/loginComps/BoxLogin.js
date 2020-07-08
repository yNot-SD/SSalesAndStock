import React from 'react'
import { Link } from 'react-router-dom'

function BoxLogin(props) {
    return (
        <div className="boxLogin">
            <h1 className="font-bold">Entrar no Sistema</h1>

            <input className="inputLogin" type="text" placeholder="Login" />
            <input className="inputLogin" type="password" placeholder="Senha" />

            <Link to="/main">
                <button>Entrar</button>
            </Link>
        </div>
    );
}

export default BoxLogin