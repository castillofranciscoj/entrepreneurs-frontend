import { ApolloProvider } from "@apollo/client";
import { useRouter } from "next/router";
import CardList from "../../../components/projectRequirementsDetails/projectRequirementsDetailCardList";
import client from "../../../graphql/client";
import { useSession } from 'next-auth/react';
import { Button } from "reactstrap";

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
        <ApolloProvider client={client}>
          <CardList id={details as string} />
        </ApolloProvider>
        <button color="success" type="button" onClick={() => router.back()}>Go back</button>
      </>
    );
  }

};


export default ProjectsRequirementsDetailsPage;
