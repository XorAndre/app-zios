import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
//Componentes
import {
  Container,
  Col,
  Row,
  RowLine
} from '../../components/Grids/style'
import {
  Description
} from '../../components/Textos/style'
import {
  ButtonOrange,
  TextButton
} from '../../components/Buttons/style'
import{
  Content,
  ContentOK,
  Template
} from './style'

export default function Limitador({navigation}) {
  return (
    <Template>
      <Container>
        <Content>
            <RowLine>
                <Col Value="2"><Ionicons name="md-power" size={40} color="red" /></Col>
                <Col Value="10">
                    <Description>
                        Para acionar o Safe Speed System,
                        basta clicar no botão de liga/desliga) e
                        selecionar umas das opções abaixo
                    </Description>
                </Col>
            </RowLine>
            <RowLine>
                <Col Value="2"><Ionicons name="md-dashboard" size={40} color="black" /></Col>
                <Col Value="10">
                    <Description>
                        Modo Limitador Inteligente o veículo
                        não ultrapassará o limite máximo de
                        velocidade permitdo na via. Basta
                        clicar na imagem para selecionar esse
                        modo.
                    </Description>
                </Col>
            </RowLine>
            <RowLine>
                <Col Value="2"><Ionicons name="md-camera" size={40} color="black" /></Col>
                <Col Value="10">
                    <Description>
                        Modo Radar Inteligente a velocidade
                        do veículo só será limitada próximo
                        aos radares de fiscalização. Basta
                        clicar na imagem para selecionar esse
                        modo
                    </Description>
                </Col>
            </RowLine>
        </Content>
        <Row>
          <Col Value="12">
            <ContentOK>
              <ButtonOrange
                  onPress={() => navigation.navigate('Login')}
              >
                <TextButton>OK</TextButton>
              </ButtonOrange>
            </ContentOK>
          </Col>
        </Row>
      </Container>
    </Template>
  );
}
