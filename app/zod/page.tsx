"use client"

import React, { useActionState } from 'react'
import { FormState, submitform } from '../lib/action'

const initialState: FormState = {success: true}

export default function ContactPage() {
  const [state, formAction] = useActionState(submitform, initialState)
  return (
    <div className='text-white p-10'>
      <form action={formAction}>
        <div>
          <input name='name' placeholder='type your ahh'/>
          {state.errors?.name && (
            <p className='text-red-500'>{state.errors.name[0]}</p>
          )}
        </div>
        <div>
          <input name='message' placeholder='type message'/>
          {state.errors?.message && (
            <p className='text-red-500'>{state.errors.message[0]}</p>
          )}
        </div>
        <button type='submit'>
          send
        </button>
      </form>
    </div>
  )
}
