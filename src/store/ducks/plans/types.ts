/**
 * Action types
 */
export enum PlansTypes {
  LOAD_REQUEST = '@plans/LOAD_REQUEST',
  LOAD_SUCCESS = '@plans/LOAD_SUCCESS',
  LOAD_FAILURE = '@plans/LOAD_FAILURE'
}

/**
 * Data types
 */

export interface Plan {
  id: number
  name: string
  minutes: number
}

/**
 * State type
 */
export interface PlansState {
  readonly data: Plan[]
  readonly loading: boolean
  readonly error: boolean
}
