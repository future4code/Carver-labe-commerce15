import React from 'react';
import space from '../img/space.png';
import terra from '../img/terra.png';
import { Link } from "react-router-dom";
import camiseta1 from '../img/camiseta1.jpeg';
import camiseta2 from '../img/camiseta2.jpeg';
import camiseta3 from '../img/camiseta3.jpeg';
import camiseta4 from '../img/camiseta4.jpeg';
import camiseta5 from '../img/camiseta5.jpeg';
import camiseta6 from '../img/camiseta6.jpeg';
import camiseta7 from '../img/camiseta7.jpeg';
import camiseta8 from '../img/camiseta8.jpeg';
import camiseta9 from '../img/camiseta9.jpeg';

import '../App.css';


function Sacola() {
    let Sacola = JSON.parse(localStorage.getItem('Sacola'))
    Sacola.filter((item)=>{
        console.log(item.image)
        let imagem = item.image;
        imagem = imagem.substring(14, 23) 
        console.log(imagem)
       
    })
    console.log(Sacola)
    
  
  return (
  
    <div>
       <header id="container-header">
<div id="menu-home">
    <img src={space}/>

    <div id="menu-horizontal">

        <ul>
            <li><Link to="/">Home</Link></li> |
            <li><Link to="/Sacola">Carrinho</Link></li> 
        </ul>
    </div>
</div>
</header>

<main>
<div id="conteudo">
    <div id="inicio-home">
        <img id="foto-terra" src={terra}/>
        <br/>
    </div>    
    <div class="carrinho-flex-container">
    {Sacola.map((item) => (
        <div class="roupa-carrinho-flex">
        <a>
        <img src={item.image} alt="roupa espacial" class="foto-roupa-espacial"/>

        </a>
        <h3>{item.name}</h3>
        <br/>
        <p>{item.descrition}</p>
        <h3>{item.value = parseFloat(item.value).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })}</h3>

        <div class="detalhes-carrinho">
            <label class= "label-quantidade" for="quantidade">Quantidade</label>
            <input class="input-quantidade" type="number" step="1"/>
        </div>
        <button>excluir X</button>

    </div>
    
     ))}
                

            </div>

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
    </div>
  );
}

export default Sacola;
