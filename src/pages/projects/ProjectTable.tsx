import React, { useState, useEffect } from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import BreadCrumbs from "../../layouts/breadcrumbs/BreadCrumbs";
import ComponentCard from "../../components/ComponentCard";
import { useQuery, gql } from '@apollo/client';
import { GET_PROJECTS, Project } from "../../graphql/queries/projects/projects_queries";


export default function ProjectTable() {
  const { loading, data: data, error } = useQuery(GET_PROJECTS)
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const projects: Project = data.projects;
  console.log(projects.length)

  return (
    <div>
      <ComponentCard title="Entrepreneurs Projects">
        <ReactTable
          data={projects}
          columns={[
            {
              Header: "Project Name",
              accessor: "name"
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </ComponentCard>
    </div>
  );
}

