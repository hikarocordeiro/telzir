import { Plan } from '../store/ducks/plans/types';
import { Price } from '../store/ducks/prices/types';

export const calc = (plan: Plan, price: Price, minutes: number, isFaleMais: boolean):number => {

  var hasToPay = 0;
  if ((plan.minutes <= minutes) && isFaleMais) {
    const extraMinutes = minutes - plan.minutes;
    hasToPay = (extraMinutes * price.cost) + (((extraMinutes * price.cost) * 10) / 100);
  }

  if(!isFaleMais) {
    hasToPay = price.cost * minutes;
  }

 return hasToPay;
}
