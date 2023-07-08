import React, { useEffect } from 'react'
import { PostComponent } from '../components/Layout/Post/PostComponent'

export const Post = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PostComponent />
    </>
  )
}
