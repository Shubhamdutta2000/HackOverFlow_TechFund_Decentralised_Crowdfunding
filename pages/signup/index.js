import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { TextField, Select, Button, FormControl, InputLabel, MenuItem, Grid, useMediaQuery, Paper, Typography } from "@mui/material"

import { useMoralis } from 'react-moralis'
import { useSignUp } from '../../utils/signUpMoralis'
import { useStyles } from '../../styles/auth.style'
import Link from 'next/link'
import Image from 'next/image'

export default function Register() {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width:600px)')
  const [userType, setUserType] = useState('contributor')
  const { signup, isAuthenticated, authError, userError } = useMoralis()
  const { register, handleSubmit } = useForm()

  const router = useRouter()

  const OnSubmit = (data) => {
    console.log({ ...data })
    useSignUp({
      ...data,
      userType,
      signup,
      isAuthenticated,
      authError,
      userError,
    })
  }

  useEffect(() => {
    if (isAuthenticated) {
      router.push(`/dashboard/${userType}`)
    }
  }, [isAuthenticated, router])

  return (
    <>
      <Grid container spacing={'14'} component="main" className={classes.root}>
        <Grid item xs={false} sm={false} md={5}  >
          <img src="" layout='fill' className={isMobile ? classes.display : classes.image} />
        </Grid>

        <Grid item xs={12} sm={12} md={7} component={Paper} elevation={0} >
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <form onSubmit={handleSubmit(OnSubmit)}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Name"
                label="Your Name"
                name="name"
                autoFocus
                type="text"
                {...register('name')}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                {...register('email')}

              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register('password')}

              />

              {/* UserType */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type of User</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={userType}
                  label="Type of User"
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <MenuItem value={'contributor'}>Contributor</MenuItem>
                  <MenuItem value={'innovator'}>Innovator</MenuItem>
                </Select>
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href='/' variant="body2">
                    Already Registered ? Login instead
                  </Link>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>


      {/* 
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
      </form> */}
    </>
  )
}
