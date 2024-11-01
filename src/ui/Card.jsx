import React from 'react'

export default function Card({children,type}) {
  return (
    <div className='flex flex-col w-1/2 mx-2 justify-evenly items-center backdrop-blur-2xl p-2 text-sky-200 shadow-2xl rounded-xl uppercase'>{children}</div>
  )
}
