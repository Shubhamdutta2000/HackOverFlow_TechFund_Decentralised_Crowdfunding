import withAuth from "components/hoc/withAuth";
import Layout from "layout/Layout";
import { useRouter } from "next/router";
import Dashboard from "./innovatorDashboard";
// import { useEffect } from "react";
// import { useMoralis } from "react-moralis"

const InnovatorDashboard = () => {
    const router = useRouter()
    // const { isAuthenticated, user } = useMoralis()

    return <Dashboard></Dashboard>
}

export default withAuth(InnovatorDashboard)

