import Layout from "layout/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
// import { useMoralis } from "react-moralis"

export default function InnovatorDashboard() {
    const router = useRouter()
    // const { isAuthenticated, user } = useMoralis()

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user")).isAuthenticated
            : false;
        if (!isAuthenticated) {
            router.push("/login")
        }
    }, [])


    return <div>Dashboard</div>
}


InnovatorDashboard.layout = Layout
