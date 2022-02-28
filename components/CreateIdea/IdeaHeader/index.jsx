import { Typography } from '@mui/material'
import { useStyles } from '../../../styles/CreateIdea/ideaHeader/ideaHeader.style'

const IdeaHeader = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography variant='h2' className={classes.header}>
        Bring your ideas to life.
      </Typography>
      <Typography variant='body2' className={classes.body} style={{fontSize: "1.3rem", fontWeight: "500"}}>
        Get going by portraying your brilliant idea below. Remember to be
        respectful. All the Best!
      </Typography>
    </div>
  )
}

export default IdeaHeader
