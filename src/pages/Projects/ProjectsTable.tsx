import React, { useState, useEffect } from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import ComponentCard from "../../components/ComponentCard";
import { useQuery, gql } from '@apollo/client';
import { GET_PROJECTS } from "../../graphql/queries/projects/projects_queries";
import { Project } from "../../graphql/queries/projects/project.type";

export default function ProjectsTable() {
  const { loading, data: data, error } = useQuery(GET_PROJECTS)
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const projects: Project[] = data.projects;

  return (
    <div>
      <ComponentCard title= {"All " + projects.length + " Projects"}>
        <ReactTable
          data={projects}
          columns={[
            {
              Header: "Project",
              accessor: "website",
              Cell: props => <a href={props.value} target="_blank"> {props.value}</a>
            },
            {
              Header: "Entrepreneur",
              accessor: "entrepreneur.name"
            },
            {
              Header: "Won",
              accessor: "prize.name"
            },
            {
              Header: "Institution",
              accessor: "module.institution.name"
            },
            {
              Header: "Programme",
              accessor: "module.programme.name"
            },
            {
              Header: "Module",
              accessor: "module.name"
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </ComponentCard>
    </div>
  );
}