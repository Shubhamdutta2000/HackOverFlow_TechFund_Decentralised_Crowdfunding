import IdeaForm from "components/CreateIdea/IdeaForm"
import IdeaHeader from "components/CreateIdea/IdeaHeader"
import withAuth from "components/hoc/withAuth";
import Layout from "layout/Layout";
import { useRouter } from "next/router";

const CreateIdea = () => {
    const router = useRouter()

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
            <IdeaHeader />
            <IdeaForm />
        </Layout>
    )
}

export default CreateIdea


