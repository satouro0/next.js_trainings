import React from 'react'
import Hexa_nav from '../components/hexa_nav'
import Hexa_footer from '../components/hexa_footer'
import Hexa_about_header from '../components/about_hexa_header'
import Hexa_about_team from '../components/about_hexa_team'
import Hexa_about_services from '../components/about_hexa_service'

export default function page() {
  return (
    <div>
      <Hexa_nav/>
      <Hexa_about_header/>
      <Hexa_about_team/>
      <Hexa_about_services/>
      <Hexa_footer/>
    </div>
  )
}

