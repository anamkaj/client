import { atom } from 'nanostores'

export const scrollState = atom<number>(0)

export const scrollStateChange = (scroll: number) => {
  scrollState.set(scroll)
}
