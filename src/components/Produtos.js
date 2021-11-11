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
const InputFiltro = styled.div`
  padding-top: 3px; 
  margin-left: 1vh;     
`

const produtos = [
    {
        id: 1,
        name: "Camiseta",
        valor: 25.00,
        imageUrl: "https://picsum.photos/200/200",
    },

    {
        id: 2,
        name: "Camiseta",
        valor: 35.00,
        imageUrl: "https://picsum.photos/200/200",
    },

    {
        id: 3,
        name: "Camiseta",
        valor: 45.00,
        imageUrl: "https://picsum.photos/200/200",
    },

    {
        id: 4,
        name: "Camiseta",
        valor: 55.00,
        imageUrl: "https://picsum.photos/200/200",
    },

    {
        id: 5,
        name: "Camiseta",
        valor: 65.00,
        imageUrl: "https://picsum.photos/200/200",
    }
]

export {produtos};

function listaDeProdutos(lista) {
    return (
        <CardProdutos
            {...lista}
        />
    )
}

const listagemProdutos = produtos.map(listaDeProdutos)

const quantidadeProdutos = 5


function Produtos() {

    return (
        <ContainerPrinc>
            <p>Quantidade de Produtos: {quantidadeProdutos}</p>
            <ContainerProdutos>
                
                {listagemProdutos}

            </ContainerProdutos>
        </ContainerPrinc>
    );
}

export default Produtos;