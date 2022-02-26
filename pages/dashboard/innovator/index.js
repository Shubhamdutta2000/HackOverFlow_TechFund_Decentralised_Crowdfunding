import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis"

const InnovatorDashboard = () => {
    const router = useRouter()
    const { isAuthenticated, user } = useMoralis()

    useEffect(() => {
        console.log(user);
        console.log(isAuthenticated);
        if (!isAuthenticated && !user) {
            router.push("/login")
        }
    }, [isAuthenticated, user])


    return <div>Dashboard</div>
}

export default InnovatorDashboard
