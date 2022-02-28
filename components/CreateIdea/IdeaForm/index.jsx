import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  Grid,
  TextField,
  TextareaAutosize,
  Paper,
  useMediaQuery,
  Button,
} from '@mui/material'
import { useStyles } from '../../../styles/CreateIdea/ideaForm/ideaForm.style'
import { useMoralis, useNewMoralisObject, useMoralisQuery } from 'react-moralis'
import { useRouter } from 'next/router'
import { createIdea } from '../../../utils/createIdea'
import { getIdeas } from '../../../utils/getIdeas'

const IdeaForm = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const router = useRouter()

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    threshold: '',
    fund: '',
    idea: '',
    amountRaised: 0,
    totalContributions: 0,
    createdBy: '',
  })

  const { user, web3, enableWeb3, isWeb3Enabled, setUserData } = useMoralis()
  const { isSaving, error, save } = useNewMoralisObject('Idea')

  const handleChange = (e) => {
    e.preventDefault()
    setFormData((f) => ({
      ...f,
      [e.target.name]: e.target.value,
      createdBy: user && user.username,
    }))
  }

  // update innovator user data with their metamask address and create idea
  const submitHandler = (e) => {
    setUserData({
      metaMaskAddress: window.ethereum._state.accounts[0],
    })
    e.preventDefault()
    createIdea({ formData, save, error })
    router.push('/dashboard/innovator')
  }

  return (
    <div className={classes.container}>
      <Grid container spacing={'11'} component='main' style={{marginTop: "-4vw"}}>
        <Grid item xs={12} sm={12} md={6} component={Paper} elevation={0} style={{paddingTop: "0"}}>
          <form className={classes.form} onSubmit={submitHandler} >
            <label className={classes.formLabel}>Title of your idea</label>
            <TextField
              style={{marginTop: "0.2rem", marginBottom: "0"}}
              variant='outlined'
              name='title'
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />
            <label className={classes.formLabel}>Short description</label>
            <TextField
              style={{marginTop: "0", marginBottom: "0"}}
              variant='outlined'
              name='description'
              value={formData.description}
              onChange={(e) => handleChange(e)}
            />
            <label className={classes.formLabel}>Minimum amount threshold</label>
            <TextField
              style={{marginTop: "0", marginBottom: "0"}}
              variant='outlined'
              name='threshold'
              value={formData.threshold}
              onChange={(e) => handleChange(e)}
            />
            <label className={classes.formLabel}>Total fund required</label>
            <TextField
              style={{marginTop: "0", marginBottom: "0"}}
              variant='outlined'
              name='fund'
              value={formData.fund}
              onChange={(e) => handleChange(e)}
            />
            <label className={classes.formLabel}>Your idea in detail</label>
            <TextareaAutosize
              style={{marginTop: "0", marginBottom: "0"}}
              minRows={16}
              className={classes.textarea}
              name='idea'
              value={formData.idea}
              onChange={(e) => handleChange(e)}
            />

            {!isWeb3Enabled ? (
              <Button
                fullWidth
                variant='contained'
                color='primary'
                className={classes.btn}
                onClick={() => enableWeb3()}
                disabled={isWeb3Enabled}
              >
                Connect with Metamask
              </Button>
            ) : (
              <Button
                fullWidth
                variant='contained'
                color='primary'
                className={classes.btn}
                type='submit'
                disabled={isSaving}
              >
                Submit Idea
              </Button>
            )}
          </form>
        </Grid>
        {!isMobile && (
          <Grid item xs={false} sm={false} md={6} style={{marginTop: "2.1rem"}}>
            <Image
              src='/assets/desktop/LoginImg.png'
              alt='vector'
              width={800}
              height={800}
            />
          </Grid>
        )}
      </Grid>
    </div>
  )
}

export default IdeaForm
