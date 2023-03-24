import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { useQuery, gql } from '@apollo/client';
import { GET_SILVER_PRICES } from "../../../graphql/queries/projects/projects_queries";
import { Prize } from "../../../graphql/queries/projects/project.type";
import { useRouter } from "next/router";

export default function Silver() {
const { loading, data: data, error } = useQuery(GET_SILVER_PRICES)
  
if (loading) return <p>Loading...</p>;
if (error) return <p>Error : {error.message}</p>;
const projects: Prize = data.projectCount;

const router = useRouter();
const handleClick = (e) => {
  e.preventDefault();
  router.push({
    pathname: "Projects/Silver"
  });
};

return (
  /*--------------------------------------------------------------------------------*/
  /* Silver                                                                         */
  /*--------------------------------------------------------------------------------*/
  <Card onClick={handleClick} style={{ cursor: "pointer" }}>
    <CardBody className="p-4">
      <CardTitle tag="h3">🥈 Silver Winners</CardTitle>
      <h3 className="fw-bold mt-3 mb-2">{data.category.prizesCount} Projects</h3>
      <CardSubtitle className="text-muted mb-1 fs-6">
      </CardSubtitle>
    </CardBody>
  </Card>
);
};