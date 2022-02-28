import { useState } from 'react'
import Image from 'next/image'
import { Grid, Typography, Button, useMediaQuery } from '@mui/material'
import { useStyles } from '../../styles/IndividualIdea/IdeaBody/ideaBody.style'
import PaymentModal from '../Modal/PaymentModal'
import { useMoralis, useWeb3Transfer } from 'react-moralis'

const IdeaBody = ({ data }) => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width:900px)')
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { user, isAuthenticated, authenticate } = useMoralis()

  return (
    <div className={classes.container}>
      <PaymentModal
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
        data={data}
      />
      {/* top section start*/}
      <Typography variant='h2'>{data && data.title}</Typography>
      <Typography variant='body2' className={classes.body}>
        {data && data.description}
      </Typography>
      <Grid container className={classes.statContainer}>
        <Grid item xs={12} sm={12} md={6} className={classes.details}>
          <div className={classes.detailGroup}>
            <Typography variant='ideaStats' className={classes.greenText}>
              {data && data.threshold} ETH
            </Typography>
            <Typography variant='ideaStats'>
              raised of {data && data.fund} ETH
            </Typography>
          </div>
          <div className={classes.detailGroup}>
            <Typography variant='ideaStats' className={classes.greenText}>
              12
            </Typography>
            <Typography variant='ideaStats'>backers</Typography>
          </div>
          <div className={classes.detailGroup}>
            <Typography variant='ideaStats' className={classes.redText}>
              1hr 30min 45sec
            </Typography>
            <Typography variant='ideaStats'>Ending in</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Button
            variant='contained'
            color='button'
            className={isMobile ? classes.btnMob : classes.btn}
            onClick={handleOpen}
          >
            Contribute to this project
          </Button>
        </Grid>
      </Grid>
      {/* top section end*/}

      {/* image start*/}
      <div className={classes.img}>
        <Image
          src='/assets/desktop/IdeaCoverImg.png'
          alt='vector'
          width={2000}
          height={800}
        />
      </div>
      {/* image end*/}

      {/* story start */}

      <Grid container className={classes.storyContainer}>
        <Grid item xs={12} sm={12} md={3}>
          <Typography variant='h4' className={classes.storyHeader}>
            Story
          </Typography>
        </Grid>
        {!isMobile && <div className={classes.vl}></div>}

        <Grid item xs={12} sm={12} md={7}>
          <Typography variant='h4' className={classes.storyDesc}>
            {data && data.idea}
          </Typography>
        </Grid>
      </Grid>

      {/* start end */}
      <div className={classes.reportBtnContainer}>
        <Button variant='contained' className={classes.reportBtn}>
          Report this project
        </Button>
      </div>
    </div>
  )
}

export default IdeaBody
