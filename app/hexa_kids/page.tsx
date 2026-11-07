import React from 'react'
import Hexa_nav from '../components/hexa_nav'
import Hexa_kids_latest from '../components/hexa_kids_latest'
import Hexa_footer from '../components/hexa_footer'

export default function page() {
  return (
    <div>
      <Hexa_nav/>
      <Hexa_kids_latest/>
      <Hexa_footer/>
    </div>
  )
}
