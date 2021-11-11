import React from 'react';
import logo from './logo.svg';
import './App.css';
import CarrinhoDeCompras from './components/CarrinhoDeCompras';

function App() {
  
  function adicionaCarrinho()  {
    
    
    return produto1
  }

  const produto1 = {
    id: Date.now(),
    name: "Camiseta",
    valor: 25.00,
    imageUrl: "https://picsum.photos/200/200",
  }

  return (
  
  
    <div>


      <button onClick={
        <CarrinhoDeCompras 
          nome={produto1.name}

        /> 
      
      }>Adicionar ao Carrinho</button> 
    </div>
  );
}

export default App;
