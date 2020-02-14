import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card } from '../../store/ducks/cards/types';

import { ApplicationState } from '../../store';

import PlanForm from '../../components/PlanForm';
import PlanCard from '../../components/PlanCard';

import { Container, Plan } from './styles';

interface StateProps {
  cards: Card[]
}

type Props = StateProps;

class Main extends Component<Props> {
  render() {
    const { cards } = this.props;
    return (
      <Container>
        <PlanForm />

        <Plan>
          { cards && cards.map(card => (
            <PlanCard key={card.title} title={card.title} price={card.value}/>
            )) }
        </Plan>
      </Container>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  cards: state.cards.data
});

export default connect(mapStateToProps)(Main);

