import React from "react";
import { Row, Col } from "reactstrap";
import ComponentCard from "../../components/ComponentCard";
import BreadCrumbs from "../../layouts/breadcrumbs/BreadCrumbs";

const BootstrapIcons = () => {
  return (
    <div>
      <BreadCrumbs />
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <ComponentCard title="Bootstrap Icons">
        <Row>
          {iconsdata.map((ico) => (
            <Col
              xs="12"
              md="6"
              lg="4"
              key={ico.name}
              className="py-3 text-truncate"
            >
              <i className={`me-2 ${ico.name}`} />
              {ico.name}
            </Col>
          ))}
        </Row>
      </ComponentCard>
      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default BootstrapIcons;
