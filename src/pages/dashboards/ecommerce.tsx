import { Row, Col } from "reactstrap";
import Earnings from "../../components/dashboards/ecommerce/Earnings";
import OrderStats from "../../components/dashboards/ecommerce/OrderStats";
import Overview from "../../components/dashboards/ecommerce/Overview";
import ProductSales from "../../components/dashboards/ecommerce/ProductSales";
import Reviews from "../../components/dashboards/ecommerce/Reviews";
import ProductTable from "../projects/ProjectTable";

const Ecommerce = () => {
  return (
    <>
      {/********************* Earnings & Overview ************************/}
      <Row>
        <Col sm="12" lg="4">
          <Earnings />
        </Col>
        <Col sm="12" lg="8">
          <Overview />
        </Col>
      </Row>
      {/********************* Product Sale Table ************************/}
      <ProductSales />
      {/********************* Product table & Order Stats ************************/}
      <Row>
        <Col sm="12" lg="8">
          <ProductTable />
        </Col>
        <Col sm="12" lg="4">
          <OrderStats />
        </Col>
      </Row>
      {/********************* Review ************************/}
      <Reviews />
    </>
  );
};

export default Ecommerce;
