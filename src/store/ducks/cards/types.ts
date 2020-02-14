/**
 * Action types
 */
export enum CardsTypes {
  SET_CARDS_INFO = '@card/SET_CARDS_INFO'
}

/**
 * Data types
 */

export interface Card {
  title: string
  value: number
}

/**
 * State type
 */
export interface CardsState {
  readonly data: Card[]
  readonly loading: boolean
  readonly error: boolean
}
