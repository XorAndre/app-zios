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
  ButtonOrange
} from '../../Components/Buttons/style'
//Pages


const Registro = () => {
  return (
    <Template>
      <Container>
        <Row>
          <Coluna Value="12">
            <Form>
              <InputLogin placeholder="Usuaário"/>
              <InputLogin placeholder="Senha"/>
              <ButtonOrange>Logar</ButtonOrange>
            </Form>
          </Coluna>
        </Row>
      </Container>
    </Template>
  );
}

export default Registro;
