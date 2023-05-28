import React from 'react';
import e1 from './e1.png';
import e2 from './e2.png';

function Comp() {
    return (
        <div className="Comp">
            <div class="main">
            <h2>Inserindo componentes:</h2>
            <ul>
                <li>No React, o conteúdo do site é organizado em componentes reutilizáveis. Cada componente representa uma parte específica do seu site. Você pode criar componentes para cabeçalhos, menus, seções de conteúdo, rodapés, etc.</li>
                <li>O JSX é uma extensão de sintaxe do JavaScript que permite escrever código HTML-like no React. Utilizando o JSX, você pode definir a estrutura e o conteúdo do seu componente. Por exemplo, para criar um componente de cabeçalho, você pode escrever algo como:</li>
            </ul>
            <img src={e1} alt="exemplo 1"/>
            <br></br>
            <img src={e2} alt="exemplo 2"/>
        </div>
      </div>
    );
}

export default Comp;