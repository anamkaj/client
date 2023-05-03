import { useMutation } from 'react-query'
import { ReviewsService } from '../../../../services/POST/FORM/post.reviews'
import { Like } from '../../../../helpers/Model/PostServer/post.req.reviews'
import { useState, useEffect } from 'react'

// Отправка на сервер комментария и сброс формы

export const usePostReviewsRating = (id: number) => {
  const [like, setLike] = useState(false)
  const [dislike, setDislike] = useState(false)
  const incLike = useMutation({
    mutationFn: (id: Like) => ReviewsService.incLike(id),
  })

  const decLike = useMutation({
    mutationFn: (id: Like) => ReviewsService.incDislike(id),
  })

  useEffect(() => {
    if (like === true) {
      incLike.mutate({
        commentId: id,
      })
    }
  }, [like])

  useEffect(() => {
    if (dislike === true) {
      decLike.mutate({
        commentId: id,
      })
    }
  }, [dislike])

  return { incLike, setLike, like, dislike, setDislike }
}
