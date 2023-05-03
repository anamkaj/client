export type ReviewsQuery = {
  id: number
  createdAt: Date
  text: string
  productId: number
  categoryId: number
  userId: number
  rating: number
  like:number
  dislike:number
}
