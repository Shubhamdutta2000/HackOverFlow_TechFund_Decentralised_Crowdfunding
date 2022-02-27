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

  const [res, setRes] = useState([])

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

  const { user } = useMoralis()
  const { isSaving, error, save } = useNewMoralisObject('Idea')

  // const {
  //   data,
  //   error: queryError,
  //   isLoading,
  // } = useMoralisQuery('Idea', (query) =>
  //   query.equalTo('objectId', '68yHrNXrudSHaZPYAOdGRPwX')
  // )

  // const {
  //   data: ideaData,
  //   error: queryError,
  //   isLoading,
  // } = useMoralisQuery('Idea')

  // useEffect(() => {
  //   var json = JSON.stringify(ideaData, null, 2)
  //   var obj = JSON.parse(json)
  //   console.log(obj)
  // }, [ideaData])

  const handleChange = (e) => {
    e.preventDefault()
    setFormData((f) => ({
      ...f,
      [e.target.name]: e.target.value,
      createdBy: user && user.id,
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    createIdea({ formData, save, error })
    // console.log(error ? error : formData)
  }

  return (
    <div className={classes.container}>
      <Grid container spacing={'14'} component='main'>
        <Grid item xs={12} sm={12} md={6} component={Paper} elevation={0}>
          <form className={classes.form} onSubmit={submitHandler}>
            <label>Title of your idea</label>
            <TextField
              variant='outlined'
              name='title'
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />
            <label>Short description</label>
            <TextField
              variant='outlined'
              name='description'
              value={formData.description}
              onChange={(e) => handleChange(e)}
            />
            <label>Minimum amount threshold</label>
            <TextField
              variant='outlined'
              name='threshold'
              value={formData.threshold}
              onChange={(e) => handleChange(e)}
            />
            <label>Total fund required</label>
            <TextField
              variant='outlined'
              name='fund'
              value={formData.fund}
              onChange={(e) => handleChange(e)}
            />
            <label>Your idea in detail</label>
            <TextareaAutosize
              minRows={3}
              className={classes.textarea}
              name='idea'
              value={formData.idea}
              onChange={(e) => handleChange(e)}
            />
            <Button
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              type='submit'
              disabled={isSaving}
            >
              Submit Idea
            </Button>
          </form>
        </Grid>
        {!isMobile && (
          <Grid item xs={false} sm={false} md={6}>
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
