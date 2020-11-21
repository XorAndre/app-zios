import * as React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
  ButtonTransparente,
  TextButton
} from '../../components/Buttons/style'
import {
  CampoInput
} from '../../components/Forms/style'
import{
  Content,
  Logo,
  Template
} from './style'

export default function Login({navigation}) {
  return (
    <Template>
      <Container>
        <Row>
          <Col Value="12">
            <Content>
              <Ionicons name="md-person" size={90} color="orange" />
              <CampoInput placeholder="E-mail"/>
              <CampoInput placeholder="Senha" />
              <ButtonOrange
                onPress={() => navigation.navigate('Registrar')}
              >
                <TextButton>Entrar</TextButton>
              </ButtonOrange>
              <ButtonTransparente
                onPress={() => navigation.navigate('RecuperarSenha')}
              >
                <TextButton>Esqueci minha senha</TextButton>
              </ButtonTransparente>
            </Content>
          </Col>
        </Row>
      </Container>
    </Template>
  );
}
