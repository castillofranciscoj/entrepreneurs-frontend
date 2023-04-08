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
    <Col key={pj.project.name as string}>
      <Card>
        <CardBody>
          <CardTitle className="h3">🥇 {pj.project.name}</CardTitle>
          <CardSubtitle>{pj.project.module.institution.country.flag} {pj.project.module.institution.name}</CardSubtitle>
          <CardText className="h6">
          
          </CardText>
          <CardText className="h5">
          
          </CardText>
          <CardText className="h5">
            <h4>By {pj.project.entrepreneur.name}</h4>
          </CardText>
          <CardText className="h5">
          <Button color="light" href={pj.project.website} target="_blank">🔗 Website</Button>
          </CardText>
          <CardText className="h5">
            {pj.project.offersCount == "1" ? (
                <Button disabled color="light">📫 {pj.project.offersCount} Offer</Button>)
              : pj.project.offersCount == "0" ? (
                <Button disabled color="light">📭 No Offers Yet</Button>)
              : (
                <Button disabled color="light">📫 {pj.project.offersCount} Offers</Button>
              )
            }
          </CardText>
          <CardText className="h5">
            {pj.project.requirementsCount == "1" ? (
                <h4><Button color="success" onClick={handleClick} style={{ cursor: "pointer" }}>👉 View {pj.project.requirementsCount} Requirement</Button></h4>)
                : (
                  <h4><Button color="success" onClick={handleClick} style={{ cursor: "pointer" }}>👉 View {pj.project.requirementsCount} Requirements</Button></h4>)
            }
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
}

export default function GoldProjects() {
  const id = "clfu788sm000o3vkbypi3kv5y";
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