import { ApolloProvider } from '@apollo/client';
import { useRouter } from 'next/router';
import client from '../graphql/client';
import ProductTable from './projects/ProjectTable';
import { useSession, signIn, signOut } from 'next-auth/react';
import React from "react";
import { Row, Col } from "reactstrap";
import Image from "next/image";
import LogoDarkIcon from "../assets/images/logos/Entrepreneurs-dark-logo-icon.svg";
import LogoDarkText from "../assets/images/logos/dark-logo-text.svg";
import ProjectsCount from "./projects/ProjectsCount";
import { Button } from "reactstrap";

const Home = () => {
	const {data: session, status} = useSession()

	if (status === 'authenticated'){
		return(
			<>
			<ApolloProvider client={client}>
			<Row>
        		<Col lg="8" sm="12">
				<ProjectsCount />
        		</Col>
      		</Row>
			<Row>
				<ProductTable />
			</Row>
			</ApolloProvider></>
		)
	} else {
		return(
			<>
		<div className="pe-4 py-3 ">
		<Image src={LogoDarkIcon} alt="logo" />
		<Image src={LogoDarkText} alt="logo" />
        </div>
		<div className="pe-4 py-3 ">
</div>
<div className="pe-4 py-3 ">
</div>
            <div align='center'>
                <h1>Welcome, please <Button color="primary" onClick={() => signIn()}>sign in</Button> to continue. </h1>
                
            </div>
            </>
		)
	}
	}

export default Home
