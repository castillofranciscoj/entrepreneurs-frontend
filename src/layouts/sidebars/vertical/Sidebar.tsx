import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import SimpleBar from "simplebar-react";
import SidebarData from "../sidebardata/SidebarData";
import Logo from "../../logo/Logo";
import { ToggleMobileSidebar } from "../../../store/customizer/CustomizerSlice";
import NavItemContainer from "./NavItemContainer";
import NavSubMenu from "./NavSubMenu";
import { useSession } from 'next-auth/react';
import LogoDarkIcon from "../../../assets/images/logos/Entrepreneurs-dark-logo-icon.svg";
import LogoDarkText from "../../../assets/images/logos/dark-logo-text.svg";
import Image from "next/image";
import {
	Card,
  Nav,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardGroup,
	Button,
	Row,
	Col,
  } from "reactstrap";

const Sidebar = () => {
  const {data: session, status} = useSession()
  const location = useRouter();
  const currentURL = location.pathname.split("/").slice(0, -1).join("/");

  //const [collapsed, setCollapsed] = useState(null);
  // const toggle = (index) => {
  //   setCollapsed(collapsed === index ? null : index);
  // };

  const activeBg = useSelector((state) => state.customizer.sidebarBg);
  const isFixed = useSelector((state) => state.customizer.isSidebarFixed);
  const dispatch = useDispatch();
  if (status === 'authenticated'){
  return (
    <div
      className={`sidebarBox shadow bg-${activeBg} ${
        isFixed ? "fixedSidebar" : ""
      }`}
    >
      <SimpleBar style={{ height: "100%" }}>
        {/********Logo*******/}
        <div className="d-flex p-3 align-items-center">
          <Logo />
        </div>
        {/********Sidebar Content*******/}
        <div className="p-3 pt-1 mt-2">
          <Nav vertical className={activeBg === "white" ? "" : "lightText"}>
            {SidebarData.map((navi) => {
              if (navi.caption) {
                return (
                  <div className="navCaption fw-bold mt-4" key={navi.caption}>
                    {navi.caption}
                  </div>
                );
              }
              if (navi.children) {
                return (
                  <NavSubMenu
                    key={navi.id}
                    icon={navi.icon}
                    title={navi.title}
                    items={navi.children}
                    suffix={navi.suffix}
                    suffixColor={navi.suffixColor}
                    // toggle={() => toggle(navi.id)}
                    // collapsed={collapsed === navi.id}
                    isUrl={currentURL === navi.href}
                  />
                );
              }
              return (
                <NavItemContainer
                  key={navi.id}
                  //toggle={() => toggle(navi.id)}
                  className={
                    location.pathname === navi.href ? "activeLink" : ""
                  }
                  to={navi.href}
                  title={navi.title}
                  suffix={navi.suffix}
                  suffixColor={navi.suffixColor}
                  icon={navi.icon}
                />
              );
            })}
          </Nav>
        </div>
      </SimpleBar>
    </div>
  );
} else {
  return(
    <SimpleBar style={{ height: "100%" }}>
    {/********Logo*******/}
    <div className="d-flex p-3 align-items-center">
      <Image src={LogoDarkIcon} alt="logo" />
			<Image src={LogoDarkText} alt="logo" />
    </div>
    </SimpleBar>
  )
}
}
export default Sidebar;
