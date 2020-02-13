import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Plan } from '../../store/ducks/plans/types';
import { ApplicationState } from '../../store';
import * as PlansActions from '../../store/ducks/plans/actions';

import { Form, SubmitButton } from './styles';

interface StateProps {
  plans: Plan[]
}

interface DispatchProps {
  planRequest(): void
}

type Props = StateProps & DispatchProps;

class PlanForm extends Component<Props> {
  componentDidMount() {
    const { planRequest } = this.props;

    planRequest()
  }

  render() {
    const { plans } = this.props;
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
            { plans.map(plan => (
              <option id={plan.id.toString()} value={plan.id.toString()}>{plan.name}</option>
            )) }
          </select>
          <SubmitButton disabled>
            Buscar Plano
          </SubmitButton>
        </Form>
      </>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  plans: state.plans.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(PlansActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlanForm);
