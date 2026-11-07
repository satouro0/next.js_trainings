"use client"

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

export default function Themetoggle() {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState()

    useEffect(() => setMounted(true), [])

    if (!mounted) return null
  return (
    <div>
        <button 
        className={`${theme === "dark" ? "bg-[#171717]" : "bg-[#ffffff]"}`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? "Dark" : "Light"}
        </button>
    </div>
  )
}
