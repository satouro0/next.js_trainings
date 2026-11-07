import React from 'react'
import Sbs_nav from '../components/sbs_nav'
import Sbs_swipper from '../components/sbs_swipper'
import Sbs_purple_fam from '../components/sbs_purple_fam'
import SbsFooter from '../components/sbs_footer'
import SbsVideo from '../components/sbs_video'
import SbsTestimonials from '../components/Sbs_testimonials'
import SbsSkateShop from '../components/sbs_shop'

export default function page() {
  return (
    <div>
      <Sbs_nav/>
      <Sbs_swipper/>
      <Sbs_purple_fam/>
      <SbsVideo/>
      <SbsSkateShop/>
      <SbsTestimonials/>
      <SbsFooter/>
    </div>
  )
}
