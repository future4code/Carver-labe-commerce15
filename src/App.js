import React from 'react';
import logo from './logo.svg';
// import CarrinhoDeCompras from './components/CarrinhoDeCompras';
import Filtros from './components/Filtros';
import styled from 'styled-components';
import Produtos from './components/Produtos';
import CarrinhoDeCompras from './components/CarrinhoDeCompras';

const ContainerPrincipal = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 1vh;
  border: 1px solid Black;
`

function App() {

  return (
    <ContainerPrincipal>
      
      <Filtros />
        
      <Produtos />  

      <CarrinhoDeCompras />
      
      
      
    </ContainerPrincipal>
  );
}

export default App;
