import React from 'react'

export default function Card({children,type}) {
  return (
    <div className='flex flex-col scroll-smooth'>{children}</div>
  )
}
