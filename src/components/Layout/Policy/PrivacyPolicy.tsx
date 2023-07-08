import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { PostServices } from '../../../services/GET/get.post'
import ReactMarkdown from 'react-markdown'
import { LazyLoad } from '../LazyLoad/LazyLoad'

export const PrivacyPolicy = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['post'],
    queryFn: () => PostServices.getOnePost(Number(7)),
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (isLoading) {
    return <LazyLoad />
  }

  return (
    <div className=' container mx-auto'>
      <h2 className=' font-thin mt-6'>
        {data?.map((x) => {
          return (
            <div>
              <ReactMarkdown className=' font-semibold text-4xl'>
                {x.title}
              </ReactMarkdown>
              <div className=' mt-8 mb-10'>
                <ReactMarkdown className='reactMarkDown'>
                  {x.post}
                </ReactMarkdown>
              </div>
            </div>
          )
        })}
      </h2>
    </div>
  )
}
