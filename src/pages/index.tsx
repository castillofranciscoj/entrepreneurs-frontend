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
	Container
  } from "reactstrap";
import Image from "next/image";
import LogoWhiteIcon from "../assets/images/logos/Entrepreneurs-white-logo-icon.svg";
import LogoWhiteText from "../assets/images/logos/white-logo-text.svg";

const Home = () => {
	const {data: session, status} = useSession()

	if (status === 'authenticated'){
		return(
			<>
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
				<div className="dividerDiv">
				<Image  width={30} height={30} src={LogoWhiteIcon} alt="logo" />
            	<Image src={LogoWhiteText} alt="logo" />
				</div>
				<div className="myDiv">
					<h2>Welcome, please <button onClick={() => signIn()}>sign in</button> to continue.</h2>
				</div>
				<div className="dividerDiv">
				<h4>When you sign in to the Entrepreneurs Hub for the first time, an account will automatically be created for you.</h4>
				</div>

			</>
		)
	}
	}

export default Home
