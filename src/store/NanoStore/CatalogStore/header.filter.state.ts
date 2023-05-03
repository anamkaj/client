import { atom } from 'nanostores'

export const headerFilter = atom<string>('')

export const changeFilterHeader = (value: string) => {
  headerFilter.set(value)
}
