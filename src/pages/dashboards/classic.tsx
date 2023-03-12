import { Row, Col } from "reactstrap";
import ActiveVisitors from "../../components/dashboards/classic/ActiveVisitors";
import EmailCampaign from "../../components/dashboards/classic/EmailCampaign";
import RecentComments from "../../components/dashboards/classic/RecentComments";
import SalesOverview from "../../components/dashboards/classic/SalesOverview";
import Stats from "../../components/dashboards/classic/Stats";
import ProjectTable from "../../components/dashboards/dashboard/ProjectTable";
import Chat from "../../components/widgets/Chat";


const Classic = () => {
  return (
    <>
      {/*********************Sales Overview ************************/}
      <Row>
        <Col lg="12">
          <SalesOverview />
        </Col>
      </Row>
      {/*********************Email & Visitor ************************/}
      <Row>
        <Col lg="8" sm="12">
          <EmailCampaign />
        </Col>
        <Col lg="4" sm="12">
          <ActiveVisitors />
        </Col>
      </Row>
      {/********************* Three Column stats ************************/}
      <Stats />
      {/*********************Project Table ************************/}
      <Row>
        <Col lg="12">
          <ProjectTable />
        </Col>
      </Row>
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

export default Classic;
