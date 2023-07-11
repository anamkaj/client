import React from 'react'
import { Helmet } from 'react-helmet-async'

type HeadProp = {
  title: string
}

export const Head = ({ title }: HeadProp) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </>
  )
}
