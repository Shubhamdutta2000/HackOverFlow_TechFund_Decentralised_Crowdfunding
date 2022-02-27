import InnovatorDashboardComp from "components/Dashboard/Innovator.dashboard";
import withAuth from "components/hoc/withAuth";
import Layout from "layout/Layout";
import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { useMoralis } from "react-moralis"

const InnovatorDashboard = () => {
    const router = useRouter()
    // const { isAuthenticated, user } = useMoralis()

    return (
        <Layout>
            <InnovatorDashboardComp />
        </Layout>
    )
}

export default withAuth(InnovatorDashboard)

