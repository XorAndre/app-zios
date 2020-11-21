import * as React from 'react';
//Componentes
import {
  Container,
  Col,
  Row
} from '../../components/Grids/style'
import {
  Description,
  Hero,
  HeroDark
} from '../../components/Textos/style'
import {
  ButtonBlue,
  ButtonGray,
  TextButton
} from '../../components/Buttons/style'
import {
  CampoInput
} from '../../components/Forms/style'
import{
  Content,
  Template
} from './style'

export default function ConfigUm({navigation}) {
  return (
    <Template>
      <Container>
        <Row>
          <Col Value="12">
            <Content>
              <Hero>1. Ligar o carro sem dar o start no motor</Hero>
              <ButtonBlue
                onPress={() => navigation.navigate('ConfigDois')}
              >
                <TextButton>Próximo</TextButton>
              </ButtonBlue>
              <ButtonGray
                onPress={() => navigation.navigate('SistemaStart')}
              >
                <TextButton>Voltar</TextButton>
              </ButtonGray>
            </Content>
          </Col>
        </Row>
      </Container>
    </Template>
  );
}
