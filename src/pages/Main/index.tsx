import React from 'react';

import { Container, Plan } from './styles';

import PlanForm from '../../components/PlanForm';
import PlanCard from '../../components/PlanCard';

const Main = () => (
  <Container>
    <PlanForm />

    <Plan>
      <PlanCard />
      <PlanCard />
    </Plan>
  </Container>
);

export default Main;
