import { action } from 'typesafe-actions';
import { PricesTypes, Price } from './types';

export const priceRequest = () => action(PricesTypes.LOAD_PRICE_REQUEST);

export const priceSuccess = (data: Price[]) => action(PricesTypes.LOAD_PRICE_SUCCESS, { data });

export const priceFailure = () => action(PricesTypes.LOAD_PRICE_FAILURE);
