"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

export default function Logout() {
    const router = useRouter()
    const handleExit = () =>{
        router.push("/login")
    }

  return (
    <div className='bg-blue-500 px-5 py-1 rounded-lg'>
      <button onClick={handleExit}>log out</button>
    </div>
  )
}
