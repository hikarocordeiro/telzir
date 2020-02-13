import { action } from 'typesafe-actions';
import { PlansTypes, Plan } from './types';

export const planRequest = () => action(PlansTypes.LOAD_REQUEST);

export const planSuccess = (data: Plan[]) => action(PlansTypes.LOAD_SUCCESS, { data });

export const planFailure = () => action(PlansTypes.LOAD_FAILURE);
