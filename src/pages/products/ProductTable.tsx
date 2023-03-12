import React, { useState, useEffect } from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import BreadCrumbs from "../../layouts/breadcrumbs/BreadCrumbs";
import ComponentCard from "../../components/ComponentCard";
import { useQuery, gql } from '@apollo/client';
import { GET_PRODUCTS, Product } from "../../graphql/queries/products/products_queries";


export default function ProductTable() {
  const { loading, data: data, error } = useQuery(GET_PRODUCTS)
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const products: Product = data.products;

  return (
    <div>
      <BreadCrumbs />
      <ComponentCard title="Products">
        <ReactTable
          data={products}
          columns={[
            {
              Header: "Product Name",
              accessor: "name",
            },
            {
              Header: "Product Owner",
              accessor:"productOwner.name"
            },
            {
              Header: "Product Group",
              accessor:"productGroup.name"
            },
            {
              Header: "SOFY ID",
              accessor: "sofyId"
            },
            {
              Header: "LeanIX",
              accessor:"leanIxId"
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </ComponentCard>
    </div>
  );
}

