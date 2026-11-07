"use client"

import React from 'react'
import { useEffect, useState } from 'react'

export default function Counter() {
    const [count, setcount] = useState(1)

    useEffect(() => {
        const timer = setInterval(() => {
            setcount((prev) => {
                if (prev >= 100) {
                    clearInterval(timer)
                    return 100
                }

                return prev + 1
            })
        }, 100);
    }, [])
    
  return (
    <div className='text-white'>
      <h1>{count}</h1>
    </div>
  )
}