import { ApolloProvider } from '@apollo/client';
import { useRouter } from 'next/router';
import client from '../../graphql/client';
import { useSession, signIn, signOut } from 'next-auth/react';
import BreadCrumbs from "../../layouts/breadcrumbs/BreadCrumbs";
import SilverProjects from "../../components/dashboards/podium/SilverProjects";
import React from "react";
import {
	Row,
	Col,
  } from "reactstrap";

const Gold = () => {
	const {data: session, status} = useSession()

	if (status === 'authenticated'){
		return(
			<>
				<ApolloProvider client={client}>
				  <SilverProjects />
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

export default Gold
