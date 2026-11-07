import React from 'react'
import Hexa_nav from '../components/hexa_nav'
import Hexa_hero from '../components/hexa_hero'
import Hexa_men_latest from '../components/hexa_mens_latest'
import Hexa_women_latest from '../components/hexa_women_latest'
import Hexa_kids_latest from '../components/hexa_kids_latest'
import Hexa_products from '../components/hexa_products'
import Hexa_social from '../components/hexa_social_media'
import Hexa_footer from '../components/hexa_footer'


export default function page() {
  return (
    <div className='selection:bg-gray-700 selection:text-white'>
      <Hexa_nav/>
      <Hexa_hero/>
      <Hexa_men_latest/>
      <Hexa_women_latest/>
      <Hexa_kids_latest/>
      <Hexa_products/>\
      <Hexa_social/>
      <Hexa_footer/>
    </div>
  )
}
