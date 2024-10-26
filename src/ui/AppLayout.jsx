import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className='bg-stone-100 h-screen'>
        <Header/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
