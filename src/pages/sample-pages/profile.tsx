import React, { useState } from "react";

import { Row, Col, Card } from "reactstrap";
import Timeline from "../../components/widgets/Timeline";
import UserProfile from "../../components/widgets/UserProfile";
import BreadCrumbs from "../../layouts/breadcrumbs/BreadCrumbs";
const Profile = () => {
  return (
    <>
      <BreadCrumbs />
      <Row>
        <Col xs="12" md="12" lg="4">
          <UserProfile />
        </Col>
        <Col xs="12" md="12" lg="8">
          <Timeline />
        </Col>
      </Row>
    </>
  );
};

export default Profile;
