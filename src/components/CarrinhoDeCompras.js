import React from "react";
import styled from "styled-components";
import ItensCarrinho from "./ItensCarrinho";
import CardProdutos from "./CardProdutos";
import {produtos} from "./Produtos";
import Produtos from "./Produtos";

const ContainerCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 2px;
`
const Itens = styled.div`
  padding-top: 3px; 
  margin-left: 1vh;     
`
export default class CarrinhoDeCompras extends React.Component{

    state = {
        produtos: []
    }
    

//  adicionaItem(id) {
//     console.log(id)
//     // console.log(listaDeProdutos.id)

// }

render(){
    // {this.adicionaItem(this.props.id)}

    // this.adicionaItem(this.props.id)

    const adicionaItem = () => {
        return console.log(this.props.ident)
    }

    return (
        
        
        
        <ContainerCarrinho>
            {adicionaItem}
            <h4>Carrinho:</h4>

            <Itens><ItensCarrinho
                
            /></Itens>

        </ContainerCarrinho>
    );
}
}




