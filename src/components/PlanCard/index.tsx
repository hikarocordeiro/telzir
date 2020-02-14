import React, { Component } from 'react';

import { formatPrice } from '../../util/format';

import { Board, Title, Price } from './styles';

interface OwnProps {
  title: string,
  price: number
}

type Props = OwnProps

export default class PlanCard extends Component<Props> {
  render() {
    const { title, price } = this.props;
    return (
      <>
        <Board>
          <Title>{title}</Title>
          <Price>{formatPrice(price)}</Price>
        </Board>
      </>
    );
  }
}
