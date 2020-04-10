import React from 'react';

import './global.css';
import './sidebar.css';

function App() {
  return (
    <div>
      <aside className="left">
        <section className="sidebar">
          <ul className="sidebar-menu">
            <li className="esp">
              <a href="#">
                Cadastros
              </a>
            </li>
            <li className="esp">
              <a href="#">
                Produtos
              </a>
            </li>
            <li className="esp">
              <a href="#">
                Vendas
              </a>
            </li>
            <li className="esp">
              <a href="#">
                Estoque
              </a>
            </li>
            <li className="esp">
              <a href="#">
                Financeiro
              </a>
            </li>
            <li className="esp">
              <a href="#">
                Notas Fiscais
              </a>
            </li>
            <li className="esp">
              <a href="#">
                Configurações
              </a>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
}

export default App;
