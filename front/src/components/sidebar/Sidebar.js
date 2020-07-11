import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';

function Sidebar(props) {
    return (

        <nav>
            <div className="middle">
                <div className="menu">

                    <div className="item">
                        <input type="checkbox" id="check1" />
                        <label for="check1" className="btn">Cadastro</label>
                        <ul className="smenu">
                            <li><Link to="#client">Cliente</Link></li>
                            <li><Link to="#provider">Fornecedor</Link></li>
                            <li><Link to="#employee">Funcionário</Link></li>
                        </ul>
                    </div>

                    <div className="item">
                        <input type="checkbox" id="check2" />
                        <label htmlFor="check2" className="btn">Produtos</label>
                        <ul className="smenu">
                            <li><Link to="#manage products">Gerenciar Produtos</Link></li>
                            <li><Link to="#product groups">Grupos de Produtos</Link></li>
                        </ul>
                    </div>

                    <div className="item">
                        <input type="checkbox" id="check3" />
                        <label htmlFor="check3" className="btn">Vendas</label>
                        <ul className="smenu">
                            <li><Link to="#balcony">Balcão</Link></li>
                            <li><Link to="#exchanges and returns">Trocas e Devoluções</Link></li>
                            <li><Link to="#configs">Configurações</Link></li>
                        </ul>
                    </div>

                    <div className="item">
                        <input type="checkbox" id="check4" />
                        <label htmlFor="check4" className="btn">Estoque</label>
                        <ul className="smenu">
                            <li><Link to="#">Movimentações</Link></li>
                            <li><Link to="#">Compras</Link></li>
                        </ul>
                    </div>

                    <div className="item">
                        <input type="checkbox" id="check5" />
                        <label htmlFor="check5" className="btn">Financeiro</label>
                        <ul className="smenu">
                            <li><Link to="#">Contas a pagar</Link></li>
                            <li><Link to="#">Contas a receber</Link></li>
                            <li><Link to="#">Fluxo de caixa</Link></li>
                            <li><Link to="#">Formas de pagamento</Link></li>
                            <li><Link to="#">Configurações</Link></li>
                        </ul>
                    </div>

                    <div className="item">
                        <input type="checkbox" id="check6" />
                        <label htmlFor="check6" className="btn">Nota fiscal</label>
                        <ul className="smenu">
                            <li><Link to="#">Gerenciar NF-e</Link></li>
                        </ul>
                    </div>

                    <div className="item">
                        <input type="checkbox" id="check7" />
                        <label htmlFor="check7" className="btn">Consigurações</label>
                        <ul className="smenu">
                            <li><Link to="#">Gerais</Link></li>
                            <li><Link to="#">Meu plano</Link></li>
                            <li><Link to="#">Dados da empresa</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>

    )
}

export default Sidebar