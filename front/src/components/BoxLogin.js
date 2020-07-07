import React from 'react'


function BoxLogin() {
    return (
        <div className="boxLogin">
            <h1 className="font-bold">Entrar no Sistema</h1>

            <input className="inputLogin" type="text" placeholder="Login" />
            <input className="inputLogin" type="password" placeholder="Senha" />

            <button>Entrar</button>
        </div>
    );
}

export default BoxLogin