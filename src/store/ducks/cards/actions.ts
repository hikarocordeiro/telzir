import { action } from 'typesafe-actions';
import { CardsTypes, Card } from './types';

export const setCardsInfo = (data: Card[]) => action(CardsTypes.SET_CARDS_INFO, { data });
