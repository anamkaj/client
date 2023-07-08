import { atom } from 'nanostores'

// export const scrollState = atom<number>(0)

type ParamScroll = {
  scroll: number
  pathname: string
}

export const scrollState = atom<ParamScroll>({
  scroll: 0,
  pathname: '',
})

export const scrollStateChange = (scroll: ParamScroll) => {
  scrollState.set(scroll)
}
