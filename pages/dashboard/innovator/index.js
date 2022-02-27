import InnovatorDashboardComp from "components/Dashboard/Innovator.dashboard";
import Layout from "layout/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

const InnovatorDashboard = () => {
    const router = useRouter()
    // const { isAuthenticated, user } = useMoralis()

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user")).isAuthenticated
            : false
        if (!isAuthenticated) {
            router.push("/login")
        }
    }, [router])

    return (
        <Layout>
            <InnovatorDashboardComp />
        </Layout>
    )
}

export default InnovatorDashboard

