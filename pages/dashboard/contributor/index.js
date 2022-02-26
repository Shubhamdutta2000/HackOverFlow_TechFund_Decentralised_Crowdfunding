import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";

const ContributorDashboard = () => {
    const { login, isAuthenticated, authError, userError, user } = useMoralis()
    const router = useRouter()

    useEffect(() => {
        console.log(user);
        console.log(isAuthenticated);
        if (!isAuthenticated && !user) {
            router.push("/login")
        }
    }, [isAuthenticated, user])

    console.log(user && user.get("userType"));
    return <div>Dashboard</div>
}

export default ContributorDashboard
