import React from "react";
import { Card, CardBody } from "reactstrap";
import { useQuery, gql } from '@apollo/client';
import { GET_PROJECTS, Project } from "../../graphql/queries/projects/projects_queries";

const ProjectsCount = () => {
  const { loading, data: data, error } = useQuery(GET_PROJECTS)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const projects: Project = data.projects;

  return (
    /*--------------------------------------------------------------------------------*/
    /* Projects Count                                                                 */
    /*--------------------------------------------------------------------------------*/
    <Card className="card-hover">
      <CardBody>
        <div className="pt-3 text-center">
          <span className="display-5 d-block fw-bold">{projects.length}</span>
          <span>Registered Projects Since 2010</span>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectsCount;
