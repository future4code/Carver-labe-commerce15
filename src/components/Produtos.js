import React from 'react';
import styled from 'styled-components';
import CardProdutos from './CardProdutos';

const ContainerPrinc = styled.div`
display: flex;
flex-direction: column;  
`
const ContainerProdutos = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 5px;
  gap: 10px;
  

`

export default class Produtos extends React.Component {
    listaDeProdutos = (lista) => {
        return (
            <CardProdutos
                {...lista}
                enviaProCarrinho={this.props.enviaProCarrinho}
            />
        )
    }

    produtos1 = this.props.produtos
    listagemProdutos = this.produtos1.map(this.listaDeProdutos)

    quantidadeProdutos = 5

    render() {
        return (
            <ContainerPrinc>
                <p>Quantidade de Produtos: {this.quantidadeProdutos}</p>
                <ContainerProdutos>

                    {this.listagemProdutos}

                </ContainerProdutos>
            </ContainerPrinc>
        );
    }

}