import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useMoralis } from 'react-moralis'

// layout for page
import { useLogin } from '../../utils/loginMoralis'

export default function Login() {
  const { register, handleSubmit } = useForm()
  const { login, isAuthenticated, authError, userError } = useMoralis()

  const router = useRouter()

  const OnSubmit = (data) => {
    console.log({ ...data })
    useLogin({
      ...data,
      login,
      isAuthenticated,
      authError,
      userError,
    })
  }

  useEffect(() => {
    if (isAuthenticated) {
      console.log("Authenticated");
      router.push(`/dashboard/${userType}`)
    }
  }, [isAuthenticated, router])

  return (
    <>
      <h1>Sign In</h1>
      <br />
      <form onSubmit={handleSubmit(OnSubmit)}>
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

        <div className='text-center mt-6'>
          <button
            className='bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
            type='submit'
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  )
}

export async function getServerSideProps(context) {
  // const providers = await getProviders();
  return {
    props: { providers: {} },
  }
}
