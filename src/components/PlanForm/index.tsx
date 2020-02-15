import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { FaExclamationTriangle } from 'react-icons/fa';

import { Plan } from '../../store/ducks/plans/types';
import { Price } from '../../store/ducks/prices/types';
import { Card } from '../../store/ducks/cards/types';

import { ApplicationState } from '../../store';

import { calc } from '../../util/Calc';

import * as PlansActions from '../../store/ducks/plans/actions';
import * as PricesActions from '../../store/ducks/prices/actions';
import * as CardsActions from '../../store/ducks/cards/actions';

import { Form, SubmitButton, Error } from './styles';

interface StateProps {
  plans: Plan[],
  prices: Price[],
  origin: string[]
}

interface DispatchProps {
  planRequest(): void,
  priceRequest(): void,
  setCardsInfo(array: Card[]): void
}

interface State {
  selectedOrigin?: string,
  destination?: string[],
  selectedDestination?: string,
  selectedPlan?: number,
  minutes: number,
  error: boolean
}

type Props = StateProps & DispatchProps;

class PlanForm extends Component<Props, State> {
  state ={
    selectedOrigin: '',
    destination: [],
    selectedDestination: '',
    selectedPlan: 0,
    minutes: 0,
    error: false
  }

  componentDidMount() {
    const { planRequest, priceRequest } = this.props;

    planRequest();
    priceRequest();
  }

  componentDidUpdate(_: Props, prevState: State): void{
    const origin = this.state.selectedOrigin
    if(prevState.selectedOrigin !== origin) {

      const destination = this.props.prices.filter(function( price ) {
        return price.origin === origin;
      })
      .map(price => price.destination);

      this.setState({destination});
    }
  }

  handleOriginChange = (e: React.ChangeEvent<HTMLSelectElement>) : void  => {
    this.setState({selectedOrigin: e.currentTarget.value});
  }

  handleDestinationChange = (e: React.ChangeEvent<HTMLSelectElement>) : void  => {
    this.setState({selectedDestination: e.currentTarget.value});
  }

  handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) : void  => {
    this.setState({minutes: parseInt(e.currentTarget.value, 10)});
  }

  handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement>) : void  => {
    this.setState({selectedPlan: parseInt(e.currentTarget.value, 10)});
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { setCardsInfo } = this.props;
    e.preventDefault();
    const { selectedOrigin, selectedDestination, selectedPlan, minutes } = this.state;

    const choosenPrice = this.props.prices.filter(item => {
      return item.origin === selectedOrigin && item.destination === selectedDestination
    });

    const choosenPlan = this.props.plans.filter(item => {
      return item.id === selectedPlan
    });

    if(!this.handleValidate()){
      const comFaleMais = calc(choosenPlan[0], choosenPrice[0], minutes, true);
      const semFaleMais = calc(choosenPlan[0], choosenPrice[0], minutes, false);

      setCardsInfo([{title: 'Com FaleMais', value: comFaleMais}, {title: 'Sem FaleMais', value: semFaleMais}]);
    } else {
      setCardsInfo([]);
    }
  }

  handleValidate = (): boolean => {
    const { selectedOrigin, selectedDestination, selectedPlan, minutes } = this.state;

    var err = false;
    if(!selectedOrigin || !selectedDestination || !selectedPlan || !minutes) {
      this.setState({error: true});
      err = true;
    } else {
      this.setState({error: false});
    }

    return err;
  }

  render() {
    const { plans, origin } = this.props;
    const { destination, error } = this.state;

    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          { error && <Error><FaExclamationTriangle />&nbsp;Todos os campos devem ser preenchidos.</Error> }
          origen:
          <select onChange={this.handleOriginChange}>
            <option></option>
            { origin.map(item => (
              <option key={item.toString()} value={item.toString()}>{item}</option>
            )) }
          </select>

          destino:
          <select onChange={this.handleDestinationChange}>
            <option></option>
            { destination.map(item => (
              <option key={item} value={item}>{item}</option>
            )) }
          </select>

          tempo de ligação:
          <input type="number" min="0" step="1" onBlur={this.handleMinutesChange}/>

          plano:
          <select onChange={this.handlePlanChange}>
            <option></option>
            { plans.map(plan => (
              <option key={plan.id} value={plan.id}>{plan.name}</option>
            )) }
          </select>
          <SubmitButton>
            Buscar Plano
          </SubmitButton>
        </Form>
      </>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  plans: state.plans.data,
  origin: [...Array.from(new Set(state.prices.data.map(price => price.origin)))],
  prices: state.prices.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ ...PlansActions, ...PricesActions, ...CardsActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlanForm);
