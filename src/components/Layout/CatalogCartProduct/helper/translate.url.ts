import { transliterate as tr } from 'transliteration'

export const translate = (s: string) => {
  const translate = tr(s).toLowerCase().replace(/\W/g, '-')
  return translate
}
