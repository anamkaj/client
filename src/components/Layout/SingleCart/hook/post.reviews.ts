import { useMutation } from 'react-query'
import { ReviewsService } from '../../../../services/POST/FORM/post.reviews'
import { SendReviews } from '../../../../helpers/Model/PostServer/post.req.reviews'
import { SubmitHandler, UseFormReset } from 'react-hook-form'

// Отправка на сервер комментария и сброс формы 


type SendReviewsProp = {
  id: number
  reset: UseFormReset<SendReviews>
}

export const usePostReviewsToServer = ({ id, reset }: SendReviewsProp) => {
  const mutation = useMutation({
    mutationFn: (data: SendReviews) => ReviewsService.sendReviews(data),
  })

  const onSubmit: SubmitHandler<SendReviews> = (data: SendReviews) => {
    if (data) {
      mutation.mutate({
        productId: id,
        text: data.text,
      })
      reset()
    }
  }

  return { onSubmit, mutation }
}
