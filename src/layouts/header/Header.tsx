import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
import {
  ToggleMiniSidebar,
  ToggleMobileSidebar,
} from "../../store/customizer/CustomizerSlice";

import LogoWhite from "../../assets/images/logos/white-logo-icon.svg";
import ProfileDD from "./ProfileDD";
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

      </Nav>
      {/******************************/}
      {/**********Left Nav Bar**********/}
      {/******************************/}

      <Nav className="ms-auto d-flex flex-row align-items-center" navbar>
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
                Sign Out
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
	}
};

export default Header;
