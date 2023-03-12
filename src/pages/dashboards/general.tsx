import { Row, Col } from "reactstrap";
import RecentComments from "../../components/dashboards/classic/RecentComments";
import ProjectTable from "../../components/dashboards/dashboard/ProjectTable";
import MonthSummery from "../../components/dashboards/general/MonthSummery";
import OrderStatus from "../../components/dashboards/general/OrderStatus";
import RevenuePageBounce from "../../components/dashboards/general/RevenuePageBounce";
import SalesRatio from "../../components/dashboards/general/SalesRatio";
import TotalVisits from "../../components/dashboards/general/TotalVisits";
import Chat from "../../components/widgets/Chat";

const General = () => {
  return (
    <>
      {/********************* Month Summery, Total visits & sales ratio, Order Status ************************/}
      <Row>
        <Col sm="12" lg="6">
          <MonthSummery />
        </Col>
        <Col sm="12" lg="6">
          <Row>
            <Col sm="12" lg="6">
              <TotalVisits />
            </Col>
            <Col sm="12" lg="6">
              <SalesRatio />
            </Col>
          </Row>
          <OrderStatus />
        </Col>
      </Row>
      {/********************* Revenue , Page, Bounce ************************/}
      <RevenuePageBounce />
      {/********************* Project Table ************************/}
      <ProjectTable />
      {/*********************Chat & comment ************************/}
      <Row>
        <Col lg="6" sm="12">
          <RecentComments />
        </Col>
        <Col lg="6" sm="12">
          <Chat />
        </Col>
      </Row>
    </>
  );
};

export default General;
