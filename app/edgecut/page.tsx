import React from 'react'
import Edge_nav from '../components/edge_nav'
import Edgeswipper from '../components/edge_swipper'
import Edge_Furniture from '../components/edge_furnitures'
import Edge_AboutUs from '../components/edge_about'
import Edge_LatestBlog from '../components/edge_blog'

export default function page() {
  return (
    <div className='mx-7'>
      <Edge_nav/>
      <Edgeswipper/>
      <Edge_Furniture/>
      <Edge_AboutUs/>
      <Edge_LatestBlog/>
    </div>
  )
}
