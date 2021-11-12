import React from 'react';
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
const produtos = [
  {
    id: 1,
    name: "Camiseta1",
    valor: 25.00,
    imageUrl: "https://picsum.photos/200/200",
  },

  {
    id: 2,
    name: "Camiseta2",
    valor: 35.00,
    imageUrl: "https://picsum.photos/200/200",
  },

  {
    id: 3,
    name: "Camiseta3",
    valor: 45.00,
    imageUrl: "https://picsum.photos/200/200",
  },

  {
    id: 4,
    name: "Camiseta4",
    valor: 55.00,
    imageUrl: "https://picsum.photos/200/200",
  },

  {
    id: 5,
    name: "Camiseta5",
    valor: 65.00,
    imageUrl: "https://picsum.photos/200/200",
  }
]

export default class App extends React.Component {
  state = {
    prodNoCarrinho: [

      {
        id: 1,
        name: "Camiseta1",
        valor: 25.00,
        imageUrl: "https://picsum.photos/200/200",
        quantidade: 1,
      },

      {
        id: 3,
        name: "Camiseta3",
        valor: 45.00,
        imageUrl: "https://picsum.photos/200/200",
        quantidade: 2,
      },

    ]
  }

  enviaProCarrinho = (id) => {
    let noCarrinho = false
    for (let teste of this.state.prodNoCarrinho) {
      if (id === teste.id){
       noCarrinho = true
      }     
  }
    console.log(noCarrinho)
    if (noCarrinho) {
      const novoNoCarrinho = this.state.prodNoCarrinho.map((lista) => {
        if(id === lista.id){
          return {...lista, quantidade: lista.quantidade + 1}
        }
        return lista
      })
      this.setState({ prodNoCarrinho: novoNoCarrinho }, () => console.log(this.state.prodNoCarrinho))

    } else {
      const produtoAdd = produtos.find(lista =>  id === lista.id)
      const novoNoCarrinho = [...this.state.prodNoCarrinho, {...produtoAdd, quantidade: 1}]
      
      this.setState({prodNoCarrinho: novoNoCarrinho}, () => console.log(this.state.prodNoCarrinho))
    }

  }


  render() {
    return (
      <ContainerPrincipal>

        <Filtros />

        <Produtos
          produtos={produtos}
          enviaProCarrinho={this.enviaProCarrinho}
        />

        <CarrinhoDeCompras

          prodNoCarrinho={this.state.prodNoCarrinho}

        />



      </ContainerPrincipal >
    );
  }
}

