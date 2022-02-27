import IdeaForm from "components/CreateIdea/IdeaForm"
import IdeaHeader from "components/CreateIdea/IdeaHeader"
import withAuth from "components/hoc/withAuth";
import Layout from "layout/Layout";

const CreateIdea = () => {

    return (
        <Layout>
            <IdeaHeader />
            <IdeaForm />
        </Layout>
    )
}

export default withAuth(CreateIdea)


