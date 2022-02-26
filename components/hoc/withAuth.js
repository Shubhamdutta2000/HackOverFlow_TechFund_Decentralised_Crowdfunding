import { useRouter } from "next/router";
import { useMoralis } from "react-moralis"

const withAuth = (WrappedComponent) => {
    return (props) => {
        // checks whether we are on client / browser or server.

        if (typeof window !== "undefined") {
            const router = useRouter()

            const isAuthenticated = localStorage.getItem("user")
                ? JSON.parse(localStorage.getItem("user")).isAuthenticated
                : false
            if (!isAuthenticated) {
                router.push("/login")
            }
            // If this is an user we just render the component that was passed with all its props
            return <WrappedComponent {...props} />;
        }

        // If we are on server, return null
        return null;
    };
};

export default withAuth;