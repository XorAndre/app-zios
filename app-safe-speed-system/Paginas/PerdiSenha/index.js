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
  Template
} from './style'

export default function RecuperarSenha({navigation}) {
  return (
    <Template>
      <Container>
        <Row>
          <Col Value="12">
            <Content>
              <Description>
                Inserir um e mail para criar sua nova senha
              </Description>
              <CampoInput placeholder="E-mail" />
              <ButtonOrange
                onPress={() => navigation.navigate('Login')}
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
