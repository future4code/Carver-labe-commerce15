import React from 'react';
import styled from 'styled-components';

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 2px;
`
const FotoProduto = styled.img`

`
export default class CardProdutos extends React.Component {
    render() {
        return (
            <ContainerCard>

                <FotoProduto src={this.props.imageUrl} />
                <h5>{this.props.name}</h5>
                <p>R${this.props.valor}</p>
                <p>{this.props.id}</p>

                <button onClick={() => this.props.enviaProCarrinho(this.props.id)}>Adicionar ao Carrinho</button>


            </ContainerCard>
        );
    }
}

