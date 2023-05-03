import { atom } from 'nanostores'

export const gridState = atom<boolean>(true)

export const changeGrid = (state: boolean) => {
  gridState.set(state)
}
