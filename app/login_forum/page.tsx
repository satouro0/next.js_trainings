import React from 'react'

export default function Login_forum() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className='bg-white h-90 w-80 rounded-2xl'>
        <header className='bg-green-600 text-center p-5 text-2xl text-white rounded-t-2xl'>Login Form</header>
        <div className='m-10'>        
        <input type="text" placeholder='Email or Phone' className='border rounded p-1 '/>
        <input type="text" placeholder='Password' className='border rounded p-1'/>
        <br />
        <a href="" className='text-green-500 '> Forgot password?</a>
        <br />
        <button className='bg-green-500 py-1 px-20 rounded-md'>Login</button>
        <h1  className='p-5'>not a member? <a href="" className='text-green-500'>sign up now</a></h1>
        </div>
      </div>
    </div>
  )
}


