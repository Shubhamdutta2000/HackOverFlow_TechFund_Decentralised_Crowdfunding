import IdeaForm from "components/CreateIdea/IdeaForm"
import IdeaHeader from "components/CreateIdea/IdeaHeader"
import Layout from "layout/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
// import { useMoralis } from "react-moralis"

export default function CreateIdea() {
    const router = useRouter()
    // const { isAuthenticated, user } = useMoralis()

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user")).isAuthenticated
            : false
        if (!isAuthenticated) {
            router.push("/login")
        }
    }, [])

    return (
        <div>
            <IdeaHeader />
            <IdeaForm />
        </div>
    )
}

CreateIdea.layout = Layout

