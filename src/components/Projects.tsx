import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Button, Card, Col, CardBody, CardText, CardTitle, CardSubtitle, Container, Row } from "reactstrap";
import { useQuery } from '@apollo/client';
import { GET_PRICES_BY_ID, GET_PROJECTS } from "../graphql/queries/projects/projects_queries";
import { Project, Prize } from "../graphql/queries/projects/project.type";
import { transformListIntoRowsOfElems } from "./utils/arrays";

function _Card(props: {pj : Project}) {
  const router = useRouter();
  const { pj } = props;
  const handleClick = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/Projects/Requirements/[details]",
      query: { details: pj.id },
    });
  };
  return (
    <Col key={pj.name as string}>
      <Card>
        <CardBody>
          <CardTitle className="h3">{pj.name}</CardTitle>
          <CardSubtitle>{pj.module.institution.country.flag} {pj.module.institution.name}</CardSubtitle>
          <CardText className="h6">
          
          </CardText>
          <CardText className="h5">
          
          </CardText>
          <CardText className="h5">
            <h4>By {pj.entrepreneur.name}</h4>
          </CardText>
          <CardText className="h5">
            <Button color="light" href={pj.website} target="_blank">🔗 Website</Button>
          </CardText>

          <CardText className="h5"> 
            {pj.offersCount == "1" ? (
                  <Button disabled color="light">📫 {pj.offersCount} Offer</Button>)
                : pj.offersCount == "0" ? (
                  <Button disabled color="light">📭 No Offers Yet</Button>)
                : (
                  <Button disabled color="light">📫 {pj.offersCount} Offers</Button>
                )
            }
          </CardText>
          <CardText className="h5">
            {pj.requirementsCount == "1" ? (
              <h4><Button color="success" onClick={handleClick} style={{ cursor: "pointer" }}>👉 View {pj.requirementsCount} Requirement</Button></h4>)
              : (
                <h4><Button color="success" onClick={handleClick} style={{ cursor: "pointer" }}>👉 View {pj.requirementsCount} Requirements</Button></h4>)
            }
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
}

export default function Projects() {
  const id = "clfu74vx000043vkbsst24ry9";
  id.toString;
  const { loading, data: data, error } = useQuery(GET_PROJECTS, {
    variables: {
      where: {
          "id": id
      }
    }
  });
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const projects: Project[] = data.projects;
  const colPerRow = 3;
  const rows = transformListIntoRowsOfElems(data.status.projects as Project[], colPerRow);

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
              return <_Card pj={pj} key={pj.id as string}/>
            })}
          </Row>
        )
      })}
    </Container>
  );
}