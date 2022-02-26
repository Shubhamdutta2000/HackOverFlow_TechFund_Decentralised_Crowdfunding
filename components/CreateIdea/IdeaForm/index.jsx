import Image from 'next/image'
import {
  Grid,
  TextField,
  TextareaAutosize,
  Paper,
  useMediaQuery,
  Button,
} from '@mui/material'
import { useStyles } from '../../../styles/CreateIdea/ideaForm/ideaForm.style'

const IdeaForm = () => {
  const classes = useStyles()

  const isMobile = useMediaQuery('(max-width:600px)')

  return (
    <div className={classes.container}>
      <Grid container spacing={'14'} component='main'>
        <Grid item xs={12} sm={12} md={6} component={Paper} elevation={0}>
          <form className={classes.form}>
            <label>Title of your idea</label>
            <TextField variant='outlined' name='title' />
            <label>Short description</label>
            <TextField variant='outlined' />
            <label>Minimum amount threshold</label>
            <TextField variant='outlined' />
            <label>Total fund required</label>
            <TextField variant='outlined' />
            <label>Your idea in detail</label>
            <TextareaAutosize
              aria-label='minimum height'
              minRows={3}
              placeholder='Minimum 3 rows'
              className={classes.textarea}
            />
            <Button variant='contained' color='button' className={classes.btn}>
              Submit Idea
            </Button>
          </form>
        </Grid>
        <Grid item xs={false} sm={false} md={6}>
          <Image
            src='/assets/desktop/LoginImg.png'
            alt='vector'
            width={800}
            height={800}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default IdeaForm
