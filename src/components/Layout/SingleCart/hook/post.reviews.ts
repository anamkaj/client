import { useMutation } from 'react-query'
import { ReviewsService } from '../../../../services/POST/FORM/post.reviews'
import { SendReviews } from '../../../../helpers/Model/PostServer/post.req.reviews'
import { SubmitHandler, UseFormReset } from 'react-hook-form'

import { Counters } from '../../../../services/POST/FORM/post.count.view.inc'

// Отправка на сервер комментария и сброс формы

type SendReviewsProp = {
  id: number
  reset: UseFormReset<SendReviews>
}

export const usePostReviewsToServer = ({ id, reset }: SendReviewsProp) => {
  const mutation = useMutation({
    mutationKey: ['addReviews'],
    mutationFn: (data: SendReviews) => ReviewsService.sendReviews(data),
  })
  // Хук увеличения счетчика отзывов 
  const { mutate } = useMutation({
    mutationKey: ['countReviewInc'],
    mutationFn: (id: number) => Counters.countReviewInc(id),
  })
  // Отправка формы на бэк

  const onSubmit: SubmitHandler<SendReviews> = (data: SendReviews) => {
    if (data) {
      mutation.mutate({
        productId: id,
        text: data.text,
      })
      reset()
      countReviewInc()
    }
  }

  // Увеличение счетчика комментариев

  const countReviewInc = () => {
    setTimeout(() => {
      mutate(id)
    }, 2000)
  }

  return { onSubmit, mutation }
}
