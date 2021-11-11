import React from 'react';
import styled from 'styled-components';
import CarrinhoDeCompras from './CarrinhoDeCompras';
import ItensCarrinho from './ItensCarrinho';
import Produtos from './Produtos';
import {produtos} from './Produtos'

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 2px;
`
const FotoProduto = styled.img`

`


// onClick={enviaProCarrinho(lista.id)}
function CardProdutos(props) {

    const array = [
        {
            name: "",
            valor: 0
        }
    ]
    
     function enviaProCarrinho(id) {
        const produtoEscolhido = {}
        if (id === produtos.id){
            produtoEscolhido = {
                name: props.name,
                valor: props.valor
            }
            
            return
            
            
            
            // <CarrinhoDeCompras 
            //     {}
            // />
        }   
        
        
        }

const identidade = props.id    
    return (
        <ContainerCard>
            <FotoProduto src={props.imageUrl}/>
            <h5>{props.name}</h5>
            <p>R${props.valor}</p>
            <p>{props.id}</p>

            {/* {identidade = props.id} */}
            <button onClick={enviaProCarrinho(identidade)}>Adicionar ao Carrinho</button>


        </ContainerCard>
    );
}

export default CardProdutos;