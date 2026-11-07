import React from 'react'
import Hexa_nav from '../components/hexa_nav'
import Hexa_men_latest from '../components/hexa_mens_latest'
import Hexa_footer from '../components/hexa_footer'

export default function page() {
  return (
    <div>
      <Hexa_nav/>
      <Hexa_men_latest/>
      <Hexa_footer/>
    </div>
  )
}
