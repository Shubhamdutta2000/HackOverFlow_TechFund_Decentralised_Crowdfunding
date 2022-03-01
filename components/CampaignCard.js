import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Typography, Box, Card } from '@mui/material'
import { useStyles } from 'styles/RelatedCampaigns/RelatedCampaigns.style'
import Image from 'next/image'
import LatestPic from '../public/assets/desktop/DiscoverCardIdeaCoverImg.png'
import { useMoralisQuery } from 'react-moralis'

export default function CampaignCard({ page, index }) {
  const classes = useStyles()

  const [idea, setIdea] = useState({})

  const {
    data: ideaData,
    error: ideaError,
    isLoading,
  } = useMoralisQuery('Idea')

  console.log(index);
  useEffect(() => {
    if (ideaData != undefined && ideaData != null) {
      var json = JSON.stringify(ideaData, null, 2)
      var obj = JSON.parse(json)
      setIdea(obj[index])
    }
  }, [ideaData, index])

  return (
    <Link href={`/ideas/${idea?.objectId}`} passHref={true}>
      <Card
        style={{ cursor: "pointer", width: page === 'dashboard' && '100%' }}
        className={classes.yourLatestCard}
      >
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0',
            margin: '0',
          }}
        >
          <div className={classes.yourLatestPicDiv}>
            <Image
              src={LatestPic}
              height={page === 'dashboard' ? '1450' : '780'}
              className={classes.yourLatestPic}
            />
          </div>
          <div
            // sx={{ flex: "1 0 auto" }}
            className={classes.yourLatestCardContent}
          >
            <Typography
              component='div'
              color='text.secondary'
              variant='description'
              style={{ fontSize: page === 'dashboard' && '1rem' }}
              className={classes.yourLatestBadge}
            >
              Tech
            </Typography>
            <Typography
              variant='description'
              style={{ fontSize: page === 'dashboard' && '1.8vw' }}
              className={classes.yourLatestCardHeading}
              component='div'
            >
              {idea && idea.title && idea.title.substring(0, 30)}..
            </Typography>
            <Typography
              variant='description'
              style={{ fontSize: page === 'dashboard' && '1vw' }}
              className={classes.yourLatestCardDescription}
            >
              {idea && idea.description && idea.description.substring(0, 50)}..
            </Typography>

            <div className={classes.yourLatestCard_innovatorDiv}>
              <img
                className={classes.yourLatestCard_innovatorPic}
                src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d0/d0ca94e64f22a73c804405bd2565d6221ae6f1a2_full.jpg'
                alt='abcd'
              />
              <Typography
                variant='description'
                color='text.secondary'
                className={classes.yourLatestCard_innovatorName}
                style={{ fontSize: page === 'dashboard' && '0.9vw' }}
              >
                {idea?.createdBy}
              </Typography>
            </div>

            {/* Black Part */}
            <div className={classes.details}>
              <div className={classes.detailGroup}>
                <Typography
                  style={{ fontSize: '16px' }}
                  variant='ideaStats'
                  className={classes.greenText}
                >
                  2 ETH
                </Typography>
                <Typography style={{ fontSize: '18px' }} variant='ideaStats'>
                  raised of 5 ETH
                </Typography>
              </div>
              <div className={classes.detailGroup}>
                <Typography
                  style={{ fontSize: '16px' }}
                  variant='ideaStats'
                  className={classes.greenText}
                >
                  12
                </Typography>
                <Typography style={{ fontSize: '18px' }} variant='ideaStats'>
                  contributors
                </Typography>
              </div>
              {page !== 'dashboard' && (
                <div className={classes.detailGroup}>
                  <Typography
                    style={{ fontSize: '16px' }}
                    variant='ideaStats'
                    className={classes.redText}
                  >
                    1hr 30min 45sec
                  </Typography>
                  <Typography style={{ fontSize: '18px' }} variant='ideaStats'>
                    Ending in
                  </Typography>
                </div>
              )}
            </div>
          </div>
        </Box>
      </Card>
    </Link>
  )
}
