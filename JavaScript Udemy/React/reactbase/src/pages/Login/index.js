import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed>
        Login
        <small>Pequeno</small>
      </Title>
      <Paragrafo>Lorem bla bla bka</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
