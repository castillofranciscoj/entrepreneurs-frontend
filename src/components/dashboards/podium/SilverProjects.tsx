import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Button, Card, Col, CardBody, CardText, CardTitle, CardSubtitle, Container, Row } from "reactstrap";
import { useQuery } from '@apollo/client';
import { GET_PRICES_BY_ID } from "../../../graphql/queries/projects/projects_queries";
import { Project, Prize } from "../../../graphql/queries/projects/project.type";
import { transformListIntoRowsOfElems } from "../../utils/arrays";

function _Card(props: {pj : Prize}) {
  const router = useRouter();
  const { pj } = props;
  const handleClick = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/Projects/Requirements/[details]",
      query: { details: pj.project.id },
    });
  };

  return (
    <Col key={pj.id as string}>
      <Card>
        <CardBody>
          <CardTitle className="h3">🥈 {pj.project.name}</CardTitle>
          <CardSubtitle>{pj.project.module.institution.country.flag} {pj.project.module.institution.name}</CardSubtitle>
          <CardText className="h6">
          
          </CardText>
          <CardText className="h5">
          
          </CardText>
          <CardText className="h5">
            Entrepreneur: {pj.project.entrepreneur.name}
          </CardText>
          <CardText className="h5">
            Project website: <a href={pj.project.website} target="_blank"> {pj.project.website}</a>
          </CardText>

          <CardText className="h5">
            Offers: {pj.project.offersCount} 
          </CardText>
          <CardText className="h5">
            Requirements: 
          </CardText>
          <CardText className="h5">
          <h4><Button onClick={handleClick} style={{ cursor: "pointer" }}>View {pj.project.requirementsCount} Requirements</Button></h4>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
}

export default function SilverProjects() {
  const id = "clfu78hgu000q3vkbi0f1y575";
  id.toString;
  const { loading, data: data, error } = useQuery(GET_PRICES_BY_ID, {
    variables: {
      where: {
        "id": id
      }
    }});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const colPerRow = 3;
  const rows = transformListIntoRowsOfElems(data.category.prizes as Prize[], colPerRow);

  if (rows.length == 0) {
    return
    <div>
      <p>There are no Projects to show.</p>
    </div>
  }

  return (
      <Container>
      {rows.map((row: Prize[], index: number) => {
        return (
          <Row key={"project-card-container-" + index}>
            {row.map((pj: Prize) => {
              return <_Card pj={pj} key={pj.id as string}/>
            })}
          </Row>
        )
      })}
    </Container>
  );
}