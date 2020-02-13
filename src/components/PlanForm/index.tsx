import React, { Component } from 'react';

import { Form, SubmitButton } from './styles';

export default class PlanForm extends Component {

  render() {
    return (
      <>
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
      </>
    );
  }
}
