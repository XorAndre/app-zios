import * as React from 'react';
import { View } from 'react-native';
//Componentes
import {
  Container,
  Col,
  Row
} from '../../components/Grids/style'
import {
  Description
} from '../../components/Textos/style'
import {
  ButtonOrange,
  ButtonGray,
  TextButton
} from '../../components/Buttons/style'
import{
  Content,
  Logo,
  Template
} from './style'

export default function Home({navigation}) {
  return (
    <Template>
      <Container>
        <Row>
          <Col Value="12">
            <Content>
              <Logo source={require('../../assets/imgs/Webp.net-resizeimage-min.png')}/>
              <Description>
              Este é um serviço exclusivo
              para veículos que possuem o
              Safe Speed System instalado.
              Para usufruir, é necessário que
              o veículo tenha a entrada de
              diagnóstico OBD2
              </Description>
              <ButtonOrange
                onPress={() => navigation.navigate('Registro')}
              >
                <TextButton>Cadastrar-se</TextButton>
              </ButtonOrange>
              <ButtonGray
                onPress={() => navigation.navigate('Login')}
              >
                <TextButton>Acessar</TextButton>
              </ButtonGray>
            </Content>
          </Col>
        </Row>
      </Container>
    </Template>
  );
}
