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

export default function ConfigTres({navigation}) {
  return (
    <Template>
      <Container>
        <Row>
          <Col Value="12">
            <Content>
              <Hero>2. Certifique se que você não está com o pé no acelerado r</Hero>
              <ButtonBlue
                onPress={() => navigation.navigate('ConfigTres')}
              >
                <TextButton>Próximo</TextButton>
              </ButtonBlue>
              <ButtonGray
                onPress={() => navigation.navigate('ConfigUm')}
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
