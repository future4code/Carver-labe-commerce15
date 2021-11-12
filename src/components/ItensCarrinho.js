import React from "react";
import styled from "styled-components";

const Item = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export class ItensCarrinho extends React.Component {

    render() {
        return (
            <Item>
                <div>
                    {/* <p>{this.props.produto.quantidade}x</p> */}
                    <p>{this.props.Item.quantidade}</p>
                </div>
                <div>
                    <p>{this.props.Item.name}</p>
                </div>
                <div>
                    <p>R${this.props.Item.valor},00</p>
                </div>
                <div>
                    <button>Remover</button>
                </div>
            </Item>
        );
    }

}