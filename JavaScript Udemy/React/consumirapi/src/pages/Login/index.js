import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import * as exampleAction from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleAction.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title isRed>
        Login
        <small>Pequeno</small>
      </Title>
      <Paragrafo>Lorem bla bla bka</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
