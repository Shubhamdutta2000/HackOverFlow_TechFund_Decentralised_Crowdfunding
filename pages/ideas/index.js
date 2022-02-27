import { Container, Typography } from "@mui/material"
import CampaignCarousal from "components/CampaignsCarousal"
import Layout from "layout/Layout"

const AllIdeas = () => {
  return (
    <Layout>
      <CampaignCarousal color="#fff" bgColor="#141414" heading={'Relavant Auctions'} />
    </Layout>
  )
}

export default AllIdeas
