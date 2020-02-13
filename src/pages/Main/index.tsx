import React from 'react';

import { Container, Form, SubmitButton, Plan, Board, Title, Price } from './styles';

const Main = () => (
  <Container>
    <Form onSubmit={()=>{}}>
      origen:
      <select>
        <option></option>
      </select>

      destino:
      <select>
        <option></option>
      </select>

      tempo de ligação:
      <input />

      plano:
      <select>
        <option></option>
      </select>
      <SubmitButton disabled>
        Buscar Plano
      </SubmitButton>
    </Form>

    <Plan>
      <Board>
        <Title>Com FaleMais</Title>
        <Price>R$ 37,00</Price>
      </Board>
      <Board>
        <Title>Sem FaleMais</Title>
        <Price>R$ 137,00</Price>
      </Board>
    </Plan>
  </Container>
);

export default Main;
