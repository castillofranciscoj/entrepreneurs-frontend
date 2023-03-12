import React from "react";
import { Row, Col } from "reactstrap";
import BreadCrumbs from "../../layouts/breadcrumbs/BreadCrumbs";
import Chat from "../../components/widgets/Chat";
import Feeds from "../../components/widgets/Feeds";

import ProfileCard from "../../components/widgets/ProfileCard";
import WeatherReport from "../../components/widgets/WeatherReport";
import CustomerSupport from "../../components/widgets/CustomerSupport";
import TaskList from "../../components/widgets/TaskList";
import BrowseStats from "../../components/widgets/BrowseStats";
import Notifications from "../../components/widgets/Notifications";

const Widgets = () => {
  return (
    <>
      <BreadCrumbs />
      <Row>
        <Col xs="12" lg="4">
          <BrowseStats />
          <ProfileCard />
          <TaskList />
        </Col>
        <Col xs="12" lg="4">
          <Chat />
          <CustomerSupport />
        </Col>
        <Col xs="12" lg="4">
          <Notifications />
          <WeatherReport />
          <Feeds />
        </Col>
      </Row>
    </>
  );
};

export default Widgets;
