import { useMoralis } from "react-moralis";

const ContributorDashboard = () => {
    const { login, isAuthenticated, authError, userError, user } = useMoralis()

    console.log(user && user.get("userType"));
    return <div>Dashboard</div>
}

export default ContributorDashboard
