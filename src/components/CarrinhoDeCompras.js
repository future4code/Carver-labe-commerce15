import React from "react";
import styled from "styled-components";
import { ItensCarrinho } from "./ItensCarrinho";

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
export default class CarrinhoDeCompras extends React.Component {

    // componentDidUpdate(prevProps, prevState){
    //     if (prevState.prodNoCarrinho !== this.props.prodNoCarrinho) {
    //         () => this.itensNoCarrinho
    //       }
    // }

    // produtos2 = this.props.prodNoCarrinho

    valorTotal = () => {
        let total = 0

        for (let produtos3 of this.props.prodNoCarrinho) {
            total = (total + (produtos3.valor * produtos3.quantidade))
        }
        console.log(total)
        return total
    }


    render() {
        return (
            <ContainerCarrinho>
                <h4>Carrinho:</h4>
                <Itens>
                    

                    {this.props.prodNoCarrinho.map((produto) => {
                        return <ItensCarrinho
                            Item={produto}        
                        />
                    })}
                </Itens>
                <p>Valor total: R${this.valorTotal()},00</p>
            </ContainerCarrinho>
        );
    }
}




