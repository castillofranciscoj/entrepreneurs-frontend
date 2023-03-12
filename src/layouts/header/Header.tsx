import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SimpleBar from "simplebar-react";
import {
  Navbar,
  Nav,
  Input,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import MessageDD from "./MessageDD";
import NotificationDD from "./NotificationDD";
import MegaDD from "./MegaDD";
import {
  ToggleMiniSidebar,
  ToggleMobileSidebar,
} from "../../store/customizer/CustomizerSlice";

import LogoWhite from "../../assets/images/logos/white-logo-icon.svg";
import ProfileDD from "./ProfileDD";
import { MessageSquare, Bell, Grid, ArrowLeftCircle } from "react-feather";
import Image from "next/image";
import { useSession, signOut } from 'next-auth/react'

const Header = () => {
  const {data: session, status} = useSession()
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const topbarColor = useSelector((state) => state.customizer.topbarBg);
  const dispatch = useDispatch();

  if (status === 'authenticated'){
		return(
      <Navbar
      color={topbarColor}
      dark={!isDarkMode}
      light={isDarkMode}
      expand="lg"
      className="topbar"
    >
      {/******************************/}
      {/**********Toggle Buttons**********/}
      {/******************************/}
      <div className="d-flex align-items-center">
        <Button
          color={topbarColor}
          className="d-none d-lg-block mx-1  hov-dd border-0"
          onClick={() => dispatch(ToggleMiniSidebar())}
        >
          <i className="bi bi-list" />
        </Button>
        <NavbarBrand href="/" className="d-sm-block d-lg-none">
          <Image src={LogoWhite} alt="logo" />
        </NavbarBrand>
        <Button
          color={topbarColor}
          className="d-sm-block d-lg-none  hov-dd border-0 mx-1"
          onClick={() => dispatch(ToggleMobileSidebar())}
        >
          <i className="bi bi-list" />
        </Button>
      </div>
      <Nav className="me-auto d-none d-lg-flex" navbar>
        {/* <NavItem>
          <Link to="/starter" className="nav-link">
            Starter
          </Link>
        </NavItem> */}

        <UncontrolledDropdown inNavbar nav>
          <DropdownToggle caret nav>
            Create
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      {/******************************/}
      {/**********Left Nav Bar**********/}
      {/******************************/}

      <Nav className="ms-auto d-flex flex-row align-items-center" navbar>
        <UncontrolledDropdown className="mx-1 hov-dd">
          <DropdownToggle
            color={topbarColor}
            className="bg-transparent border-0"
          >
            <Bell size={18} />
          </DropdownToggle>
          <DropdownMenu className="ddWidth">
            <DropdownItem header>
              <span className="mb-0 font-weight-bold">Notifications</span>
            </DropdownItem>
            <DropdownItem divider />
            <SimpleBar style={{ maxHeight: "350px" }}>
              <NotificationDD />
            </SimpleBar>
            <DropdownItem divider />
            <div className="p-2 px-3">
              <Button color="primary" size="sm" block>
                Check All
              </Button>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
        {/******************************/}
        {/**********Message DD**********/}
        {/******************************/}
        <UncontrolledDropdown className="mx-1 hov-dd">
          <DropdownToggle
            color={topbarColor}
            className="bg-transparent border-0"
          >
            <MessageSquare size={18} />
          </DropdownToggle>
          <DropdownMenu className="ddWidth">
            <DropdownItem header>
              <span className="mb-0 font-weight-bold">Messages</span>
            </DropdownItem>
            <DropdownItem divider />
            <SimpleBar style={{ maxHeight: "350px" }}>
              <MessageDD />
            </SimpleBar>
            <DropdownItem divider />
            <div className="p-2 px-3">
              <Button color="primary" size="sm" block>
                Check All
              </Button>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
        {/******************************/}
        {/**********Mega DD**********/}
        {/******************************/}
        <UncontrolledDropdown className="mega-dropdown mx-1 hov-dd">
          <DropdownToggle
            className="bg-transparent border-0"
            color={topbarColor}
          >
            <Grid size={18} />
          </DropdownToggle>
          <DropdownMenu>
            <MegaDD />
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown className=" hov-dd">
          <DropdownToggle color="transparent" style={{ lineHeight: "0px" }}>
            <Image
              src={session.user.image}
              alt="profile"
              className="rounded-circle"
              width="30"
              height="30"
            />
          </DropdownToggle>
          <DropdownMenu className="ddWidth">
            <ProfileDD />
            <div className="p-2 px-3">
              <Button onClick={() => signOut()} color="danger" size="sm">
                Logout
              </Button>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      {/******************************/}
      {/**********Notification DD**********/}
      {/******************************/}
    </Navbar>
		)
	} else {
		return(
			<div><p>You are not signed in.</p></div>
		)
	}
};

export default Header;
