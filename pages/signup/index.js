import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { TextField, Select, Button, FormControl, InputLabel, MenuItem, Grid, useMediaQuery, Paper, Typography } from "@mui/material"

import { useMoralis } from 'react-moralis'
import { useSignUp } from '../../utils/signUpMoralis'
import { useStyles } from '../../styles/auth.style'
import Link from 'next/link'
import Image from 'next/image'
import AuthNavLogo from "../../public/assets/AuthNavLogo.png";

export default function Register() {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width:600px)')
  const [userType, setUserType] = useState('contributor')
  const { register, handleSubmit } = useForm()
  const { signup, isAuthenticated, authError, userError, user } = useMoralis()

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
    console.log(user);
    if (isAuthenticated && user) {
      localStorage.setItem("user", JSON.stringify({ isAuthenticated: isAuthenticated }))
      router.push(`/dashboard/${user.get("userType")}`)
    }
  }, [isAuthenticated, user, router])


  // Back to previous page
  const backToPrevPage = () => {
    router.back()
  }


  return (
    <>
      <Grid container spacing={'14'} component="main" className={classes.root}>
        <Grid item xs={false} sm={false} md={6}  >
          <Image
            src='/assets/desktop/LoginImg.png'
            alt='vector'
            width={1300}
            height={1500}
            className={isMobile ? classes.display : classes.image}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6} component={Paper} elevation={0} >
          <Grid container >
            <Grid item sm={6}>
              <div className={classes.navLogo}>
                <Link href="/" >
                  <Image width='100' height={'20'} src={AuthNavLogo} alt="Logo" />
                </Link>
              </div>

            </Grid>
            <Grid item sm={6} >
              <Typography onClick={backToPrevPage} component="h1" className={classes.backBtn}>
                Back
              </Typography>

            </Grid>
          </Grid>
          <div className={classes.paper}>
            <Typography component="h1" sx={{ textAlign: "left", fontSize: "44px" }} variant="heading">
              Hey there!
            </Typography>
            <Typography component="h3" style={{ marginBottom: "2rem", fontWeight: "500" }} variant="description">
              Hop on to the world of future and get started with contributing or innovating.
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
              <FormControl style={{ marginTop: "1rem" }} fullWidth>
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
                // className={classes.submit}
                sx={{
                  fontFamily: "'Euclid Circular A', sans-serif",
                  borderRadius: "100rem",
                  fontSize: "1.16vw",
                  padding: "0.50vw 2.1vw",
                  margin: "3",
                  color: '#fff',
                  margin: "1.2rem 0",
                }}
              >
                Sign Up
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href='/login' variant="body2">
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

    </>
  )
}
