import React, { useState, useEffect } from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import ComponentCard from "../../components/ComponentCard";
import { Badge } from "reactstrap";
import { useQuery, gql } from '@apollo/client';
import { GET_PROJECTS } from "../../graphql/queries/projects/projects_queries";
import { Project } from "../../graphql/queries/projects/project.type";
import { Button } from "reactstrap";

export default function ProjectsTable() {
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
  const projects: Project[] = data.status.projects;

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
              Cell: row => <div style={{ fontWeight:"bold" }}>{row.value}</div>,
              minWidth: 120,
            },
            {
              Header: "Entrepreneur",
              Cell: row => <div style={{ fontWeight:"bold" }}>{row.value}</div>,
              accessor: "entrepreneur.name",
              minWidth: 120,
            },
            {
              Header: "Requirements",
              accessor: "requirementsCount",
              miWidth: 0,
              show: false
            },
            {
              Header: "createdAt",
              accessor: "createdAt",
              desc: true,
              show: false
            },
            {
              Header: "Institution",
              accessor: "module.institution.name",
              show: false
            },
            {
              Header: "Country",
              accessor: "module.institution.country.flag",
              Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>,
              miWidth: 70,
              maxWidth: 70,
            },
            {
              Header: "Website",
              accessor: "website",
              Cell: props => 
              <div style={{ textAlign: "center" }}>
                <Button color="light" href={props.value} target="_blank">Open Website</Button>
              </div>,
              minWidth: 80,
            },
            {
              Header: "Offers",
              accessor: "offersCount",
              desc: true,
              Cell: row => <div style={{ textAlign: "center" }}>
                {row.value == 1 ? (
                  <Button disabled color="light">📫 {row.value} Offer</Button>)
                : row.value == 0 ? (
                  <Button disabled color="light">📭 No Offers Yet</Button>)
                : (
                  <Button disabled color="light">📫 {row.value} Offers</Button>
                )
              }
                </div>,
              minWidth: 100,
            },
            {
              Header: "Requirements",
              accessor: "id",
              Cell: props => 
                  <div style={{ textAlign: "center" }}>
                    {props.row.requirementsCount == 1 ? (
                      <Button color="success" href={"/Projects/Requirements/" + props.value}>👉 View {props.row.requirementsCount} Requirement</Button>)
                      : (
                      <Button color="success" href={"/Projects/Requirements/" + props.value}>👉 View {props.row.requirementsCount} Requirements</Button>)
                    }
                  </div>,
              minWidth: 150,
            },
          ]}
          defaultPageSize={30}
          className="-highlight"
        />
      </ComponentCard>
    </div>
  );
}