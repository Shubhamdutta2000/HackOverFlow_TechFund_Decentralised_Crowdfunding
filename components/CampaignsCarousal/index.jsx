import { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import { useStyles } from 'styles/RelatedCampaigns/RelatedCampaigns.style'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { useMoralisQuery } from 'react-moralis'
import DiscoverCard from 'components/DiscoverCard'

const CampaignCarousal = ({ color, bgColor, heading }) => {
  const [ideas, setIdeas] = useState([])

  const classes = useStyles()

  const responsive = {
    428: { items: 1 },
    768: { items: 2 },
    1024: { items: 4 },
  }

  const {
    data: ideaData,
    error: ideaError,
    isLoading,
  } = useMoralisQuery('Idea')

  useEffect(() => {
    if (ideaData != undefined && ideaData != null) {
      var json = JSON.stringify(ideaData, null, 2)
      var obj = JSON.parse(json)
      setIdeas(obj)
    }
  }, [ideaData])

  //   const campaigns = [
  //     <DiscoverCard key={1} />,
  //     <DiscoverCard key={2} />,
  //     <DiscoverCard key={3} />,
  //     <DiscoverCard key={4} />,
  //     <DiscoverCard key={5} />,
  //   ]

  const campaigns = ideas?.map((idea) => (
    <DiscoverCard key={idea.objectId} idea={idea} />
  ))

  return (
    <div
      style={{
        position: 'relative',
        background:
          heading === 'Newest Campaigns'
            ? 'url("assets/desktop/ListAllProj_NewestCampaignBg.png")'
            : '#141414',
        color: color,
        top: heading === 'Newest Campaigns' ? '6.5vw' : '0',
        zIndex: heading === 'Newest Campaigns' ? '-1' : '0',
      }}
      className={classes.container}
    >
      <Typography
        style={{
          position: 'relative',
          top: heading === 'Newest Campaigns' ? '-8vw' : '0',
          marginBottom: '2rem',
          color: heading === 'Newest Campaigns' ? '#333CFF' : '#FFFCDC',
        }}
        component={'h1'}
        variant='heading'
      >
        {heading}
      </Typography>

      <div
        style={{
          position: 'relative',
          width: '95%',
          top: heading === 'Newest Campaigns' ? '-8vw' : '0',
        }}
      >
        <AliceCarousel
          mouseTracking
          items={campaigns}
          responsive={responsive}
          // controlsStrategy="alternate"
        />
      </div>
    </div>
  )
}

export default CampaignCarousal
