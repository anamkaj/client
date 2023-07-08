import { atom } from 'nanostores'

// стор фильтра в каталоге

export const headerFilter = atom<string>('')

export const changeFilterHeader = (value: string) => {
  headerFilter.set(value)
}

export const countPage = atom<number>(1)

export const changePageCount = () => {
  countPage.set(countPage.get() + 1)
}

export const changePageCountDefault = () => {
  countPage.set(1)
}
