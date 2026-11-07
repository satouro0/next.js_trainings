/// https://jsonplaceholder.typicode.com/posts/1

import React from 'react'
import { products } from '../lib/products'

export default async function page() {
  const respond1 = await fetch("https://jsonplaceholder.typicode.com/posts/1")
  const data1 = await respond1.json()
  const respond2 = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data2 = await respond2.json()
  return (
    <div className="bg-[url('/leg_up_life.png')] h-100">
      <ul className=''>
        {products.map((p) => (
            <li key={p.id}>
                {p.name} : 
                {p.items}
            </li>
        ))}
      </ul>
      <hr />
      <div>
        <h1>{data1.title}</h1>
        <h1>{data1.body}</h1>
      </div>
      <hr />
      <div>
        <ul>
          {data2.slice(0, 10).map((post: {id: number, title: string}) =>(
            <li key={post.id}>
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
