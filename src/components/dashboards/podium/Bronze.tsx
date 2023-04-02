import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Card, Badge, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { useQuery, gql } from '@apollo/client';
import { GET_PRICES_BY_ID } from "../../../graphql/queries/projects/projects_queries";
import { useRouter } from "next/router";

export default function Bronze() {

const id = "clfu78qoa000s3vkbnzrfgw5o";
id.toString;
const { loading, data: data, error } = useQuery(GET_PRICES_BY_ID, {
  variables: {
    where: {
      "id": id
    }
  }});

  
if (loading) return <p>Loading...</p>;
if (error) return <p>Error : {error.message}</p>;

const router = useRouter();
const handleClick = (e) => {
  e.preventDefault();
  router.push({
    pathname: "Projects/Bronze"
  });
};

  return (
    /*--------------------------------------------------------------------------------*/
    /* Bronze                                                                         */
    /*--------------------------------------------------------------------------------*/
    <Card onClick={handleClick} style={{ cursor: "pointer" }}>
      <CardBody className="p-4">
        <CardTitle tag="h3">🥉 Bronze Winners</CardTitle>
        <h3 className="fw-bold mt-3 mb-2"><Badge color="success">{data.category.prizesCount}</Badge> Projects</h3>
        <CardSubtitle className="text-muted mb-1 fs-6">
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};