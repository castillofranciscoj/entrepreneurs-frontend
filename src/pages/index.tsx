import { ApolloProvider } from '@apollo/client';
import { useRouter } from 'next/router';
import client from '../graphql/client';
import ProductTable from './projects/ProjectTable';
import { useSession, signIn, signOut } from 'next-auth/react';
import React from "react";
import Image from "next/image";
import LogoDarkIcon from "../assets/images/logos/Entrepreneurs-dark-logo-icon.svg";
import LogoDarkText from "../assets/images/logos/dark-logo-text.svg";
import ProjectsCount from "./projects/ProjectsCount";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardGroup,
	Button,
	Row,
	Col,
  } from "reactstrap";

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
				<div className="pe-4 py-3"></div><div className="pe-4 py-3"></div>
				<div className="myDiv">
					<h3>Welcome, please <button onClick={() => signIn()}>sign in</button> to continue.</h3>
				</div>
				
			</>
		)
	}
	}

export default Home
