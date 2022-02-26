import IdeaForm from "components/CreateIdea/IdeaForm"
import IdeaHeader from "components/CreateIdea/IdeaHeader"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis"

const CreateIdea = () => {
    const router = useRouter()
    const { isAuthenticated, user } = useMoralis()

    // useEffect(() => {
    //     console.log(user);
    //     console.log(isAuthenticated);
    //     if (!isAuthenticated && !user) {
    //         router.push("/login")
    //     }
    // }, [isAuthenticated, user])

    return (
        <div>
            <IdeaHeader />
            <IdeaForm />
        </div>
    )
}

export default CreateIdea
