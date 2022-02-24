import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

// layout for page

import { useMoralis } from 'react-moralis'
import { useSignUp } from '../../utils/signUpMoralis'

export default function Register() {
  const { signup, isAuthenticated, authError, userError } = useMoralis()
  const { register, handleSubmit } = useForm()
  // const [userType, setUserType] = useState('Contributor')

  const router = useRouter()

  const OnSubmit = (data) => {
    console.log({ ...data })
    useSignUp({
      ...data,
      // userType,
      signup,
      isAuthenticated,
      authError,
      userError,
    })
  }

  useEffect(() => {
    if (isAuthenticated) {
      router.push(`/admin/dashboard`)
    }
  }, [isAuthenticated, router])

  // const [name, setUserType] = React.useState("Patient")
  // const [email, setUserType] = React.useState("Patient")

  return (
    <>
      <h1>Sign Up</h1>
      <br />
      <form onSubmit={handleSubmit(OnSubmit)}>
        <div className='relative w-full mb-3'>
          <label
            className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
            htmlFor='grid-password'
          >
            User Name
          </label>
          <input
            type='name'
            {...register('name')}
            className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
            placeholder='Name'
          />
        </div>

        <div className='relative w-full mb-3'>
          <label
            className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
            htmlFor='grid-password'
          >
            Email
          </label>
          <input
            type='email'
            {...register('email')}
            className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
            placeholder='Email'
          />
        </div>

        <div className='relative w-full mb-3'>
          <label
            className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
            htmlFor='grid-password'
          >
            Password
          </label>
          <input
            type='password'
            {...register('password')}
            className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
            placeholder='Password'
          />
        </div>
        <select
          {...register('userType')}
        >
          <option value={'Innovator'}>Innovator</option>
          <option value={'Contributor'}>Contributor</option>
        </select>


        <div className='text-center mt-6'>
          <button
            className='bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
            type='submit'
          >
            Create Account
          </button>
        </div>
      </form>
    </>
  )
}
