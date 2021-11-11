import React from "react";
import styled from "styled-components";
import App from "../App";



export function CarrinhoDeCompras(props) {

    const produto = [
        {
            name: "",
            valor: 0.00,
        }]


    function adicionaCarrinho (props)  {

        const produtoCarrinho = {props}
        // this.setState({produto: this.props.name})
        console.log(produtoCarrinho)

    }


    return (

        <div>
            <h3>Carrinho:</h3>
            {this.adicionaCarrinho()}


        </div>
    );
}

