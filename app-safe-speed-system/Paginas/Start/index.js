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
  TextButton
} from '../../components/Buttons/style'
import {
  CampoInput
} from '../../components/Forms/style'
import{
  Content,
  Template
} from './style'

export default function SistemaStart({navigation}) {
  return (
    <Template>
      <Container>
        <Row>
          <Col Value="12">
            <Content>
              <HeroDark>Configuração do Safe Speed System</HeroDark>
              <Description>
                Já estamos finalizando!
                Para que você possa utilizar o Safe Speed
                System, precisamos só configurá lo com
                os parametros do seu veículo
              </Description>
              <Hero>Podemos Começar?</Hero>
              <ButtonBlue
                onPress={() => navigation.navigate('ConfigUm')}
              >
                <TextButton>Aceitar</TextButton>
              </ButtonBlue>
            </Content>
          </Col>
        </Row>
      </Container>
    </Template>
  );
}
