import { useMutation } from 'react-query'
import { Counters } from '../../../../services/POST/FORM/post.count.view.inc'

export const useCountViewInc = (id: number) => {
  const { mutate } = useMutation({
    mutationKey: ['countViewInc'],
    mutationFn: (id: number) => Counters.countViewInc(id),
  })

  const countViewInc = () => {
    setTimeout(() => {
      mutate(id)
    }, 2000)
  }
  return { countViewInc }
}
