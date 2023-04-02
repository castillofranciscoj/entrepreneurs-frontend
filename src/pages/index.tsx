import { ApolloProvider } from '@apollo/client';
import { useRouter } from 'next/router';
import client from '../graphql/client';
import { useSession, signIn, signOut } from 'next-auth/react';
import BreadCrumbs from "../layouts/breadcrumbs/BreadCrumbs";
import Gold from "../components/dashboards/podium/Gold";
import Silver from "../components/dashboards/podium/Silver";
import Bronze from "../components/dashboards/podium/Bronze";
import ProjectsTable from './Projects/ProjectsTable';
import React from "react";
import {
	Row,
	Col,
  } from "reactstrap";

const Home = () => {
	const {data: session, status} = useSession()

	if (status === 'authenticated'){
		return(
			<>
			<BreadCrumbs />
				<ApolloProvider client={client}>
			  <Row>
				{/********************* Podium ************************/}
				<Col sm="12" lg="4">
				  	<Gold />
				</Col>
				<Col sm="12" lg="4">
					<Silver />
				</Col>
				<Col sm="12" lg="4">
				 	<Bronze />
				</Col>
			  </Row>
			  {/********************* Detail ************************/}
			  <ProjectsTable />
			  </ApolloProvider>
			</>
		)
	} else {
		return(
			<>
				<div className="pe-4 py-3"></div><div className="pe-4 py-3"></div>
				<div className="myDiv">
					<h2>Welcome, please <button onClick={() => signIn()}>sign in</button> to continue.</h2>
				</div>
				
			</>
		)
	}
	}

export default Home
