import React from 'react';
import logo from './logo.svg';
import space from './img/space.png';
import terra from './img/terra.png';
import camisa1 from './img/camisa1.jpeg';
import camisa2 from './img/camiseta2.jpeg';
import camisa3 from './img/camiseta3.jpeg';
import camisa4 from './img/camiseta4.jpeg';
import camisa5 from './img/camiseta5.jpeg';
import camisa6 from './img/camiseta6.jpeg';
import camisa8 from './img/camiseta8.jpeg';
import camisa9 from './img/camiseta9.jpeg';

import './App.css';
import CarrinhoDeCompras from './components/CarrinhoDeCompras';

function App() {
  
  
  let produtos = [{
    id:1,
    name:"Camiseta do espaço",
    descrition:"Camiseta espacial fabulosa",
    value:70.00,
    image:camisa1
  },
  {
    id:1,
    name:"Camiseta do espaço",
    descrition:"Camiseta espacial fabulosa",
    value:70.00,
    image:camisa2
  },
  {
    id:1,
    name:"Camiseta do espaço",
    descrition:"Camiseta espacial fabulosa",
    value:70.00,
    image:camisa3
  },
  {
    id:1,
    name:"Camiseta do espaço",
    descrition:"Camiseta espacial fabulosa",
    value:70.00,
    image:camisa4
  },
  {
    id:1,
    name:"Camiseta do espaço",
    descrition:"Camiseta espacial fabulosa",
    value:70.00,
    image:camisa5
  },
  {
    id:1,
    name:"Camiseta do espaço",
    descrition:"Camiseta espacial fabulosa",
    value:70.00,
    image:camisa8
  }

]

  return (
  
    <div>
       <header id="container-header">
<div id="menu-home">
    <img src={space}/>

    <div id="menu-horizontal">

        <ul>
            <li><a href="index.html">Home </a></li> |
            <li><a href="carrinho.html">Carrinho</a></li> 
        </ul>
    </div>
</div>
</header>

<main>
<div id="conteudo">
    <div id="inicio-home">
        <img id="foto-terra" src={terra}/>
        <h1 class="titulo-empresa">Um novo conceito de moda<br/> feito pra você.<br/></h1>
        <br/>
    </div>    

</div>

<div class="roupas-espaciais-flex-container">
  {produtos.map((produto) => (
    <div class="item-roupa-flex">
      <a>
          <img src={produto.image} alt="roupa espacial" class="foto-roupa-espacial"/>
      </a>
      <h3>{produto.name}</h3>
      <br/>
      <p>{produto.descrition}</p>
      <h3>R$: {produto.value}</h3>
    </div>
  ))}
    
    
</div>    
</main>

<footer id="container-footer">

<p> Bernado Augusto de Souza 324, Prédio Lindoia 157 | (00) 8436 - 67120 |  spaceclothing@contato.com</p>
<div class="redes-sociais">
    <a target="_blank" href="https://www.instagram.com/">
        <img class="imagem" src="" alt=""/>
    </a>
    <a target="_blank" href="https://www.facebook.com/">
        <img class="imagem" src=""/>
    </a>
</div>
</footer>
      


      {/* <button onClick={
        <CarrinhoDeCompras 
          nome={produto1.name}

        /> 
      
      }>Adicionar ao Carrinho</button>  */}
    </div>
  );
}

export default App;
