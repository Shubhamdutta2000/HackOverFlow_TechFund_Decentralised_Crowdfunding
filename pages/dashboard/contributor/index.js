import ContributorDashboardComp from "components/Dashboard/Contributor.dashboard";
import Layout from "layout/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";

const ContributorDashboard = () => {
    const { user } = useMoralis()
    const router = useRouter()

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user")).isAuthenticated
            : false
        if (!isAuthenticated) {
            router.push("/login")
        }
    }, [router])

    console.log(user && user.get("userType"));
    return (
        <Layout>
            <ContributorDashboardComp />
        </Layout>
    )
}

export default ContributorDashboard
