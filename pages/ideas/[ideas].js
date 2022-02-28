import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import CampaignCarousal from 'components/CampaignsCarousal'
import Layout from 'layout/Layout'
import IdeaBody from '../../components/IdeaBody'
import { useMoralisQuery } from 'react-moralis'

const IndividualIdeaPage = () => {
  const [data, setData] = useState({})

  const router = useRouter()

  const { ideas } = router.query
  console.log(ideas)

  const {
    data: ideaData,
    error: queryError,
    isLoading,
  } = useMoralisQuery(
    'Idea',
    (query) => query.equalTo('objectId', ideas),
    [ideas],
    {
      live: true,
    }
  )

  useEffect(() => {
    if (ideas != undefined && ideas != null) {
      var json = JSON.stringify(ideaData, null, 2)
      var obj = JSON.parse(json)
      setData(obj[0])
    }
    console.log(data)
  }, [ideas, ideaData, isLoading])

  return (
    <Layout>
      <IdeaBody data={data} />
      <CampaignCarousal
        color='#333CFF'
        bgColor='#fff'
        heading='Related Campaigns'
      />
    </Layout>
  )
}

export default IndividualIdeaPage
