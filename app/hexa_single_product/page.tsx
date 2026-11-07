import React from 'react'
import Hexa_nav from '../components/hexa_nav'
import Hexa_product_banner from '../components/products_banner'
import Hexa_single_product from '../components/hexa_single'
import Hexa_footer from '../components/hexa_footer'

export default function page() {
  return (
    <div>
      <Hexa_nav/>
      <br /><br />
      <Hexa_product_banner/>
      <br /><br />
      <Hexa_single_product/>
      <Hexa_footer/>
    </div>
  )
}
