import React, { useState, useEffect } from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import ComponentCard from "../../components/ComponentCard";
import { Badge } from "reactstrap";
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
      <ComponentCard title={"All " + projects.length + " Projects"}>
        <ReactTable
          data={projects}
          showPagination= {true}
          showPaginationTop= {false}
          showPaginationBottom= {true}
          showPageSizeOptions= {true}
          minRows={0}
          pageSizeOptions= {[25, 50, 100, 200]}
          columns={[
            {
              Header: "Project",
              accessor: "name",
              minWidth: 120,
            },
            {
              Header: "Web",
              accessor: "website",
              Cell: props => <a href={props.value} target="_blank">Link</a>,
              minWidth: 50,
            },
            {
              Header: "Requirements",
              accessor: "requirementsCount",
              minWidth: 100,
            },
            {
              Header: "Offers",
              accessor: "offersCount",
              minWidth: 50,
            },
            {
              Header: "Make Offer",
              accessor: "id",
              Cell: props => <a href={"/Projects/Requirements/" + props.value} target="_blank">Link</a>,
              minWidth: 80,
            },
            {
              Header: "Entrepreneur",
              accessor: "entrepreneur.name"
            },
            {
              Header: "Institution",
              accessor: "module.institution.name"
            },
            {
              Header: "Country",
              accessor: "module.institution.country.name",
              minWidth: 60,
            },
            {
              Header: "",
              accessor: "module.institution.country.flag",
              maxWidth: 80,
              minWidth: 50,
              width: 45,
            },
          ]}
          defaultPageSize={30}
          className="-striped -highlight"
        />
      </ComponentCard>
    </div>
  );
}