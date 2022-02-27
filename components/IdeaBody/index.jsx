import Image from 'next/image'
import { Grid, Typography, Button, useMediaQuery } from '@mui/material'
import { useStyles } from '../../styles/IndividualIdea/IdeaBody/ideaBody.style'

const IdeaBody = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width:900px)')
  return (
    <div className={classes.container}>
      {/* top section start*/}
      <Typography variant='h2'>Learn Web 3.0</Typography>
      <Typography variant='body2' className={classes.body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
        dolor sit amet.
      </Typography>
      <Grid container className={classes.statContainer}>
        <Grid item xs={12} sm={12} md={6} className={classes.details}>
          <div className={classes.detailGroup}>
            <Typography variant='ideaStats' className={classes.greenText}>
              2 ETH
            </Typography>
            <Typography variant='ideaStats'>raised of 5 ETH</Typography>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
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
