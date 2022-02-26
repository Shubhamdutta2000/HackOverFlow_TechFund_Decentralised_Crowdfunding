import { useRouter } from "next/router";
import { useEffect } from "react";
// import { useMoralis } from "react-moralis"

const InnovatorDashboard = () => {
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

export default InnovatorDashboard
