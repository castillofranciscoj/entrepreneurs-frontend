import { useQuery, useMutation } from "@apollo/client";
import { useSession } from 'next-auth/react';
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
                return <_Card requirement={requirement} project={data.project} key={"details-" + requirement.id}/>
              })}
            </Row>
          );
        })}
      </Container>
    );
  }
}

function _Card(props: {requirement: Requirement, project: Project}) {
  const { requirement } = props;
  const { project } = props;
  const {data: session, status} = useSession()
  const [placeOffer, { loading }] = useMutation(CREATE_OFFER, {
    variables: {
      name: requirement.name, 
      offererEmail: session?.user?.email,
      pid: project.id,
      rid: requirement.id
    },
  });

  return (
    <Col key={requirement.id as string}>
      <Card>
        <CardBody>
          <CardTitle className="h4">{requirement.icon}</CardTitle>
          <CardText className="h5">{requirement.name}</CardText>
          <CardText className="h5">
          <h5><Button onClick={placeOffer} disabled={loading}>Place an Offer for this Requirement</Button></h5>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
}