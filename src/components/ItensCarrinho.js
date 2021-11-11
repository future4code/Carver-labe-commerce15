import React from "react";
import styled from "styled-components";
import CarrinhoDeCompras from "./CarrinhoDeCompras";

const Item = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`



function ItensCarrinho(props) {

    return (
        <Item>
            <div>
                <p>1x</p>
            </div>
            <div>
                <p>{props.nome}</p>
            </div>
            <div>
                <button>Remover</button>
            </div>
        </Item>
    );
}


export default ItensCarrinho;
