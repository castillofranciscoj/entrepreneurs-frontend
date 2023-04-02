import { useQuery, useMutation } from "@apollo/client";
import { useSession } from 'next-auth/react';
import { useEffect } from "react";
import { Button, Container, Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Project, Requirement } from "../../graphql/queries/projects/project.type";
import {
  GET_PROJECT_REQUIREMENTS, CREATE_OFFER,
} from "../../graphql/queries/projects/projects_queries";
import { transformListIntoRowsOfElems } from "../utils/arrays";

export default function ProjectRequirementsDetailCardList(props: {id:string}) {
  const {data: session, status} = useSession()
  if (status === 'authenticated'){
    const { id } = props;
    const { loading, data: data, error } = useQuery(GET_PROJECT_REQUIREMENTS, {
      variables: {
        where: { id: id }
      }});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    const rows = transformListIntoRowsOfElems(data.project.requirements as Requirement[], 1);

    if (rows.length == 0) {
      return <div>
        <p>This Project has no requirements.</p>
      </div>
    }
    return (    
      <Container>
        {rows.map((row: Requirement[], index: number) => {
          return (
            <Row key={"project-requirements-card-container-" + index}>
              {row.map((requirement: Requirement) => {
                return <_Card requirement={requirement} project={data.project} key={requirement.id as string}/>
              })}
            </Row>
          );
        })}
      </Container>
    );
  }
}


function _Card(props: {requirement: Requirement, project: Project}) {
  let input;
  const { requirement } = props;
  const { project } = props;
  const {data: session, status} = useSession()

  const [placeOffer, { data }] = useMutation(CREATE_OFFER, {
    variables: {
      offererEmail: session?.user?.email,
      entrepreneurEmail: project.entrepreneur.email,
      pid: project.id,
      rid: requirement.id
    },
    
  });
  
  return (
    <Col key={requirement.id as string}>
      <Card>
        <CardBody>
          <CardTitle className="h3">{project.name}</CardTitle>
          <CardText className="h5">{requirement.icon} Has a {requirement.name} requirement.</CardText>
          <CardText className="h5"></CardText>
          <CardText className="h5">Place an offer:</CardText>
          <CardText className="h5">
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                placeOffer({ variables: { name: input.value } });
                input.value = 'Offer placed!';
                input.disabled=true;
              }}
            >
              <input
                ref={node => {
                  input = node;
                }}
              />
              <Button type="submit">Add Offer</Button>
            </form>
          </div>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
}