import React, { Component } from 'react';

import { Board, Title, Price } from './styles';

export default class PlanCard extends Component {
  render() {
    return (
      <>
        <Board>
          <Title>Com FaleMais</Title>
          <Price>R$ 37,00</Price>
        </Board>
      </>
    );
  }
}
