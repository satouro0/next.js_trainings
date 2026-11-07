import React from 'react'
import Sbs_nav from '../components/sbs_nav'
import SbsSkateShop from '../components/sbs_shop'
import SbsFooter from '../components/sbs_footer'

export default function page() {
  return (
    <div>
      <Sbs_nav/>
      <SbsSkateShop/>
      <SbsFooter/>
    </div>
  )
}
