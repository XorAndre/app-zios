import * as React from 'react';
//Componentes
import {
  Container,
  Col,
  Row
} from '../../components/Grids/style'
import {
  Description,
  Hero
} from '../../components/Textos/style'
import {
  ButtonOrange,
  ButtonTransparente,
  TextButton
} from '../../components/Buttons/style'
import {
  CampoInput
} from '../../components/Forms/style'
import{
  Content,
  Template
} from './style'

export default function Registrar({navigation}) {
  return (
    <Template>
      <Container>
        <Row>
          <Col Value="12">
            <Content>
              <Hero>Código Qr</Hero>
              <Description>
               Ligar o veículo e inserir o password que
               se encontra embaixo do código QR
              </Description>
              <CampoInput placeholder="Inserir o password" />
              <ButtonOrange
                onPress={() => navigation.navigate('SistemaStart')}
              >
                <TextButton>Aceitar</TextButton>
              </ButtonOrange>
            </Content>
          </Col>
        </Row>
      </Container>
    </Template>
  );
}
