import React from 'react'
import { useQuery } from 'react-query'
import { PostServices } from '../../../services/GET/get.post'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { LazyLoad } from '../LazyLoad/LazyLoad'
import { Head } from '../Head/Head'

export const PostComponent = () => {
  const { id } = useParams()

  const { data, isLoading } = useQuery({
    queryKey: ['post'],
    queryFn: () => PostServices.getOnePost(Number(id)),
  })

  if (isLoading) {
    return <LazyLoad />
  }

  return (
    <div className=' mx-auto container mt-4'>
      {data?.map((x) => (
        <div key={x.id} className=' mt-8 flex flex-col items-center'>
          <Head title={x.title} />
          <div className=' mt-4 mb-4 w-[30%] '>
            <img
              className=' rounded-lg shadow-sm'
              src={`https://tmk-v.ru:8080/img/post/${x.img}`}
              alt=''
            />
          </div>
          <div className=' mt-10'>
            <ReactMarkdown className=' font-semibold text-4xl'>
              {x.title}
            </ReactMarkdown>
          </div>
          <div className=' mt-8 mb-10'>
            <ReactMarkdown className='reactMarkDown'>{x.post}</ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  )
}
