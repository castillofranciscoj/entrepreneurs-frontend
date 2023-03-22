import { ApolloProvider } from "@apollo/client";
import { useRouter } from "next/router";
import CardList from "../../../components/projectRequirementsDetails/projectRequirementsDetailCardList";
import client from "../../../graphql/client";
import { useSession } from 'next-auth/react';
import BreadCrumbs from "../../../layouts/breadcrumbs/BreadCrumbs";


const ProjectsRequirementsDetailsPage = () => {
  const {data: session, status} = useSession()

  if (status === 'authenticated'){
    const router = useRouter();
    const { details } = router.query;
    const back = () => {
      router.push({
        pathname: "/"
      });
    };
    return (
      <>
      <BreadCrumbs />
        <ApolloProvider client={client}>
          <CardList id={details as string} />
        </ApolloProvider>
      </>
    );
  }

};


export default ProjectsRequirementsDetailsPage;
