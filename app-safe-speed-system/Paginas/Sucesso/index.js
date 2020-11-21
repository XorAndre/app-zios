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
  ButtonGray,
  TextButton
} from '../../components/Buttons/style'
import{
  Content,
  Template
} from './style'

export default function Sucesso({navigation}) {
  return (
    <Template>
      <Container>
        <Row>
          <Col Value="12">
            <Content>
              <Hero>PARABÉNS</Hero>
              <Description>
              Clique em OK para passar
              utilizar o Safe Speed System
              </Description>
              <ButtonGray
                onPress={() => navigation.navigate('Limitador')}
              >
                <TextButton>OK</TextButton>
              </ButtonGray>
            </Content>
          </Col>
        </Row>
      </Container>
    </Template>
  );
}
