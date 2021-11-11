import React from 'react';
import styled from 'styled-components';

const ContainerFiltro = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 2px;
`
const InputFiltro = styled.div`
  padding-top: 3px; 
  margin-left: 1vh;     
`

function Filtros() {

    return (
        <ContainerFiltro>
            <h4>Filtros:</h4>

            <InputFiltro><input placeholder="Valor mínimo" /></InputFiltro>
            <InputFiltro><input placeholder="Valor máximo" /></InputFiltro>
            <InputFiltro><input placeholder="Nome do Produto" /></InputFiltro>

        </ContainerFiltro>
    );
}

export default Filtros;