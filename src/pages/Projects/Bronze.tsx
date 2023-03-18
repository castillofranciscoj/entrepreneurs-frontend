import { ApolloProvider } from '@apollo/client';
import { useRouter } from 'next/router';
import client from '../../graphql/client';
import { useSession, signIn, signOut } from 'next-auth/react';
import BreadCrumbs from "../../layouts/breadcrumbs/BreadCrumbs";
import BronzeProjects from "../../components/dashboards/podium/BronzeProjects";
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
			<BreadCrumbs />
				<ApolloProvider client={client}>
				  <BronzeProjects />
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
