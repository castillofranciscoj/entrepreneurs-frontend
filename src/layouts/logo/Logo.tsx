import { useSelector } from "react-redux";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import LogoDarkIcon from "../../assets/images/logos/Entrepreneurs-dark-logo-icon.svg";
import LogoDarkText from "../../assets/images/logos/dark-logo-text.svg";
import LogoWhiteIcon from "../../assets/images/logos/Entrepreneurs-white-logo-icon.svg";
import LogoWhiteText from "../../assets/images/logos/white-logo-text.svg";

const Logo = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const toggleMiniSidebar = useSelector(
    (state) => state.customizer.isMiniSidebar
  );
  const activeSidebarBg = useSelector((state) => state.customizer.sidebarBg);
  return (
    <Link href="/" className="d-flex align-items-center gap-2">

        {isDarkMode || activeSidebarBg !== "white" ? (
          <>
            <Image src={LogoWhiteIcon} alt="logo" />
            {toggleMiniSidebar ? "" : <Image src={LogoWhiteText} alt="logo" />}
          </>
        ) : (
          <>
            <Image src={LogoDarkIcon} alt="logo" />
            {toggleMiniSidebar ? "" : <Image src={LogoDarkText} alt="logo" />}
          </>
        )}

    </Link>
  );
};

export default Logo;
