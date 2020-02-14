/**
 * Action types
 */
export enum PricesTypes {
  LOAD_PRICE_REQUEST = '@prices/LOAD_PRICE_REQUEST',
  LOAD_PRICE_SUCCESS = '@prices/LOAD_PRICE_SUCCESS',
  LOAD_PRICE_FAILURE = '@prices/LOAD_PRICE_FAILURE'
}

/**
 * Data types
 */

export interface Price {
  id: number
  origin: string
  destination: string
  cost: number
}

/**
 * State type
 */
export interface PricesState {
  readonly data: Price[]
  readonly loading: boolean
  readonly error: boolean
}
