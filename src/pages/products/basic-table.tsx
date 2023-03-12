import React from "react";
import ProjectTable from "../../components/dashboards/dashboard/ProjectTable";
import BreadCrumbs from "../../layouts/breadcrumbs/BreadCrumbs";


export default function BasicTable() {
  return (
    <>
      <BreadCrumbs />
      {/*--------------------------------------------------------------------------------*/}
      {/* Start Inner Div*/}
      {/*--------------------------------------------------------------------------------*/}

      <ProjectTable />

      
    </>
  );
};

