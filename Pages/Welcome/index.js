import React from 'react';
//Componentes
import {
  Template
} from '../../Components/Template/style'
import {
  Container,
  Coluna,
  Row,
} from '../../Components/Grids/style'
import {
  Form,
  InputLogin
} from '../../Components/Forms/style'
import {
  ButtonOrange,
  ButtonGray
} from '../../Components/Buttons/style'
import {
    ParagrafoWelcome
} from '../../Components/Text/style' 
//Pages


const Welcome = () => {
  return (
    <Template>
      <Container>
        <Row>
          <Coluna Value="12">
            <ParagrafoWelcome>
            Este é um serviço exclusivo
            para veículos que possuem o
            Safe Speed System instalado.
            Para usufruir, é necessário que
            o veículo tenha a entrada de
            diagnóstico OBD2
            </ParagrafoWelcome>
            <ButtonOrange>CADASTRAR-SE</ButtonOrange>
            <ButtonGray>ACESSAR</ButtonGray>
          </Coluna>
        </Row>
      </Container>
    </Template>
  );
}

export default Welcome;
