import React from "react";
import Link from "next/link";
import {
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Container,
  Input,
} from "reactstrap";

import { Bell, MessageSquare, Grid } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import SimpleBar from "simplebar-react";
import NotificationDD from "./NotificationDD";
import Image from "next/image";
import { ToggleMobileSidebar } from "../../store/customizer/CustomizerSlice";
import ProfileDD from "./ProfileDD";
import HorizontalLogo from "../logo/HorizontalLogo";
import { useSession, signOut } from 'next-auth/react';

const HorizontalHeader = () => {
  const {data: session, status} = useSession()
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const topbarColor = useSelector((state) => state.customizer.topbarBg);
  const isMobileSidebar = useSelector(
    (state) => state.customizer.isMobileSidebar
  );
  const dispatch = useDispatch();

  if (status === 'authenticated'){
		return(
      <Navbar
      color={topbarColor}
      dark={!isDarkMode}
      light={isDarkMode}
      expand="lg"
      className="shadow HorizontalTopbar p-0"
    >
      <Container className="d-flex align-items-center">
        {/******************************/}
        {/**********Logo**********/}
        {/******************************/}
        <div className="pe-4 py-3 ">
          <HorizontalLogo />
        </div>
        {/******************************/}
        {/**********Toggle Buttons**********/}
        {/******************************/}
        <Nav className="me-auto d-none d-lg-flex" navbar>
          {/* <NavItem>
          <Link to="/starter" className="nav-link">
            Starter
          </Link>
        </NavItem> */}

        </Nav>
        <Nav className="ms-auto d-flex flex-row align-items-center" navbar>
        <UncontrolledDropdown className=" hov-dd">
          <DropdownToggle color="white" style={{ lineHeight: "10px" }}>
          {session.user.name}
          </DropdownToggle>
          <DropdownMenu className="ddWidth">
            <ProfileDD />
            <div className="p-2 px-3">
              <Button onClick={() => signOut()} color="danger" size="sm">
                Sign Out
              </Button>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      </Container>
    </Navbar>
		)
	}
	}

export default HorizontalHeader;
