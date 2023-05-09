export const variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0 },
}

export const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}

export const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
}

export const variants1 = {
  visible: (i: any) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
  hidden: { opacity: 0 },
}
export const variantsTableParams = {
  visible: (i: any) => ({
    opacity: 1,
    transition: {
      delay: i * 0.05,
    },
  }),
  hidden: { opacity: 0 },
}
