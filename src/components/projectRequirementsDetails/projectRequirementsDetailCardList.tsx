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
      offererName: session?.user?.name,
      entrepreneurEmail: project.entrepreneur.email,
      pid: project.id,
      rid: requirement.id
    },
    
  });
  
  return (
    <Col key={requirement.id as string}>
      <Card>
        <CardBody>
          <CardTitle className="h3">Opportunity in {project.name}!</CardTitle>
          <br />
          <CardText className="h5">Has a {requirement.name} {requirement.icon} requirement available.</CardText>
          <CardText className="h5"></CardText>
          <br />
          <CardText className="h5">If you're interested in placing an offer on this opportunity, please enter your offer details below:</CardText>
          <CardText className="h5">
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                  placeOffer({ variables: { name: input.value } });
                  input.value = 'Thank you for placing your offer! We have received your offer and have sent an email to both you and the entrepreneur to confirm that your offer has been placed. Please check your email for further instructions on how to proceed. If the entrepreneur is interested in your offer, they will be in touch with you to discuss further details. In the meantime, please continue to browse the Entrepreneurs Hub and explore other potential collaboration opportunities.';
                  input.disabled=true;
              }}
            >
        <br />
              <textarea rows="4" cols="50" required className="form-input__input"
                ref={node => {
                  input = node;
                }}
              />
              <br />
            <label className="form-input__label">
            <br />
             <p><input type="checkbox" required name="checkbox"/> By submitting your offer, you agree to share your contact details with the entrepreneur.</p>
        </label>
        <br />
        <br />
              <Button color="success" type="submit">👉 Place An Offer</Button>
            </form>
          </div>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
}