import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useMoralis } from 'react-moralis'
import {
  TextField,
  Button,
  Grid,
  useMediaQuery,
  Paper,
  Typography,
} from '@mui/material'

// layout for page
import { useLogin } from '../../utils/loginMoralis'
import { useStyles } from '../../styles/auth.style'
import Link from 'next/link'

export default function Login() {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width:600px)')
  const { register, handleSubmit } = useForm()
  const { login, isAuthenticated, authError, userError, user } = useMoralis()

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
    if (isAuthenticated && user) {
      localStorage.setItem("user", JSON.stringify({ isAuthenticated: isAuthenticated }))
      router.push(`/dashboard/${user.get('userType')}`)
    }

    // Auth Error Handler
    if (authError) {
      alert(authError.message)
    }

    if (userError) {
      alert(userError.message);
    }
  }, [isAuthenticated, user, router, authError, userError])

  return (
    <>
      <Grid container spacing={'14'} component='main' className={classes.root}>
        <Grid item xs={false} sm={false} md={5}>
          <Image
            src='/assets/desktop/LoginImg.png'
            alt='vector'
            width={1000}
            height={1100}
            className={isMobile ? classes.display : classes.image}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={7} component={Paper} elevation={0}>
          <div className={classes.paper}>
            <Typography component='h1' variant='h5'>
              Login
            </Typography>
            <form onSubmit={handleSubmit(OnSubmit)}>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                {...register('email')}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                {...register('password')}
              />

              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                sx={{
                  fontFamily: "'Euclid Circular A', sans-serif",
                  borderRadius: "100rem",
                  fontSize: "1.16vw",
                  padding: "0.50vw 2.1vw",
                  margin: "3",
                  color: '#fff',
                  margin: "1rem 0",
                }}
              >
                Login
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href='/signup' variant='body2'>
                    Not Registered Yet? Register instead
                  </Link>
                </Grid>
                <Grid item></Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export async function getServerSideProps(context) {
  // const providers = await getProviders();
  return {
    props: { providers: {} },
  }
}
