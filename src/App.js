import React from 'react'
import { Link } from "react-router-dom";
import space from './img/space.png';
import terra from './img/terra.png';
import camisa1 from './img/camiseta1.jpeg';
import camisa2 from './img/camiseta2.jpeg';
import camisa3 from './img/camiseta3.jpeg';
import camisa4 from './img/camiseta4.jpeg';
import camisa5 from './img/camiseta5.jpeg';
import camisa8 from './img/camiseta8.jpeg';
import './App.css'

class App extends React.Component {
    state = {
      produtos: [{
        id:1,
        name:"Blusa",
        descrition:"Camiseta espacial fabulosa",
        value:10.00,
        image:camisa1
      },
      {
        id:2,
        name:"Camiseta do espaço",
        descrition:"Camiseta espacial fabulosa",
        value:20.00,
        image:camisa2
      },
      {
        id:3,
        name:"Camiseta do espaço",
        descrition:"Camiseta espacial fabulosa",
        value:30.00,
        image:camisa3
      },
      {
        id:4,
        name:"Camiseta do espaço",
        descrition:"Camiseta espacial fabulosa",
        value:40.00,
        image:camisa4
      },
      {
        id:5,
        name:"Camiseta do espaço",
        descrition:"Camiseta espacial fabulosa",
        value:50.00,
        image:camisa5
      },
      {
        id:6,
        name:"Camiseta do espaço",
        descrition:"Camiseta espacial fabulosa",
        value:70.00,
        image:camisa8
      }
    
      ],

      Sacola: [],
      FiltroNome:''
    }

  
    AdicionarSacola(item){
      console.log("oi")
      console.log(item)
      this.state.Sacola.push(item)
      localStorage.setItem('Sacola',JSON.stringify(this.state.Sacola))
  
    }

    FiltrarNome(item){
      this.setState({FiltroNome:item})
      console.log(this.state.FiltroNome)
      let produtosFiltro = this.state.produtos
      if(item){
        this.state.produtos = produtosFiltro.filter((produto)=>{
          //console.log(); 
            let pesquisa
            if(produto.name.includes(this.state.FiltroNome)){
              pesquisa = produto
              
            }
            return pesquisa
          //console.log(this.state.produto.name.includes(this.state.FiltroNome))
        })
      }
      
    }

  render() {
    
    if(this.state.FiltroNome){
      console.log("Tem filtro")
    }else{
      console.log("Nao tem Filtro")
      console.log(this.state.produtos.length);
      if(this.state.produtos.length > 0 ){
        console.log("tem produtos");
        localStorage.setItem('Produtos',JSON.stringify(this.state.produtos))
      }else{
        console.log("nao tem produtos");
        this.state.produtos = JSON.parse(localStorage.getItem('Produtos'))
      }
    }
    if (!localStorage.getItem('Sacola')) {
      this.state.Sacola  = []
    }else{
      this.state.Sacola = JSON.parse(localStorage.getItem('Sacola'))
    }
   

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

</div>
<div class="container">
<div class="filtro-camisas">
   <div>
     <label class="" for="">Produto</label>
     <input class="input-filtro" type="text" onChange={e => this.FiltrarNome(e.target.value)} value={this.state.FiltroNome}/>
   </div>
   <div>
     <label class="" for="">Valor Mínimo</label>
     <input class="input-filtro" type="number"/>
   </div>
   <div>
     <label class="" for="">Valor Máximo</label>
     <input class="input-filtro" type="number"/>
   </div>
  
</div>
<div class="roupas-espaciais-flex-container">
{this.state.produtos.map((produto) => (
 <div class="item-roupa-flex">
   <a>
       <img src={produto.image} alt="roupa espacial" class="foto-roupa-espacial"/>
   </a>
   <h3>{produto.name}</h3>
   <br/>
   <p>{produto.descrition}</p>
   <h3>R$: {produto.value}</h3>
  <button class="botao-adc-carrinho" onClick={() => this.AdicionarSacola(produto)}>adcionar ao carrinho</button> 

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
    )
  }
}

export default App