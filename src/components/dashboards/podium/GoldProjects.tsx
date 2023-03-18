import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Card, Col, CardBody, CardText, CardTitle, CardSubtitle, Container, Row } from "reactstrap";
import { useQuery } from '@apollo/client';
import { GET_GOLD_PRICES } from "../../../graphql/queries/projects/projects_queries";
import { Project, Requirement } from "../../../graphql/queries/projects/project.type";
import { transformListIntoRowsOfElems } from "../../utils/arrays";

function _Card(props: {pj : Project}) {
  const { pj } = props;

  return (
    <Col key={pj.id as string}>
      <Card>
        <CardBody>
          <CardTitle className="h3">🥇 {pj.name}</CardTitle>
          <CardSubtitle>📍 {pj.module.institution.country.name} </CardSubtitle>
          <CardText className="h4">
          </CardText>
          <CardText className="h4">
          {pj.module.institution.name} 
          </CardText>
          <CardText className="h4">
            Entrepreneur: {pj.entrepreneur.name}
          </CardText>
          <CardText className="h4">
            Project website: <a href={pj.website} target="_blank"> link</a>
          </CardText>
          <CardText className="h4">
            Project Offers: {pj.offersCount} 
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
}

export default function GoldProjects() {
  const { loading, data: data, error } = useQuery(GET_GOLD_PRICES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const colPerRow = 3;
  const rows = transformListIntoRowsOfElems(data.prize.project as Project[], colPerRow);

  if (rows.length == 0) {
    return
    <div>
      <p>There are no Projects to show.</p>
    </div>
  }

  return (
      <Container>
      {rows.map((row: Project[], index: number) => {
        return (
          <Row key={"project-card-container-" + index}>
            {row.map((pj: Project) => {
              return <_Card pj={pj} key={"details-" + pj.id}/>
            })}
          </Row>
        )
      })}
    </Container>
  );
}