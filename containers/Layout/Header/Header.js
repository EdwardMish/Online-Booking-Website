import React from "react";
import { withRouter } from "next/router";
import Logo from "components/UI/Logo/Logo";
import { Row, Col } from "antd";
import Container from "components/UI/Container/Container";
import HeaderWrapper, { MobileNavbar } from "./Header.style";

import SocialBar from "../../../components/SocialShare/SocialBar";
// const AuthMenu = dynamic(() => import('./AuthMenu'));
// const MainMenu = dynamic(() => import('./MainMenu'));
// const MobileMenu = dynamic(() => import('./MobileMenu'));
// const ProfileMenu = dynamic(() => import('./ProfileMenu'));
// const NavbarSearch = dynamic(() => import('./NavbarSearch'));

const Header = () => {
  return (
    <HeaderWrapper>
      <Container className="desktopHeader">
        <Row justify="space-between" align="middle" style={{ padding: "40px 0 60px" }}>
          <Col span={8}>
            <Logo withLink linkTo="/" src="/images/logo-alt-white.svg" title="Reservations Center" />
          </Col>
          <Col span={8} style={{ textAlign: "center" }}>
            <SocialBar url={"/"} />
          </Col>
          <Col span={8} style={{ textAlign: "right", fontSize: "18px", fontWeight: "bold" }}>
            833-612-1634
          </Col>
        </Row>
      </Container>
      <MobileNavbar className={`mobileHeader`}>
        {/* <Logo withLink linkTo="/" src="/images/logo-mobile.svg" title="Reservations Center" /> */}
        <div className="phone-area">
          <a href="tel:833-612-1634">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.5 11.5625C14.4062 11.5625 13.3562 11.3875 12.3763 11.0638C12.07 10.9675 11.7288 11.0375 11.4837 11.2738L9.55875 13.1988C7.0825 11.9388 5.0525 9.9175 3.7925 7.4325L5.7175 5.49875C5.9625 5.27125 6.0325 4.93 5.93625 4.62375C5.6125 3.64375 5.4375 2.59375 5.4375 1.5C5.4375 1.01875 5.04375 0.625 4.5625 0.625H1.5C1.01875 0.625 0.625 1.01875 0.625 1.5C0.625 9.71625 7.28375 16.375 15.5 16.375C15.9812 16.375 16.375 15.9812 16.375 15.5V12.4375C16.375 11.9563 15.9812 11.5625 15.5 11.5625ZM14.625 8.5H16.375C16.375 4.15125 12.8488 0.625 8.5 0.625V2.375C11.8862 2.375 14.625 5.11375 14.625 8.5ZM11.125 8.5H12.875C12.875 6.085 10.915 4.125 8.5 4.125V5.875C9.9525 5.875 11.125 7.0475 11.125 8.5Z"
                fill="#db9b20"
              />
            </svg>
            <span style={{ color: "#fff", marginLeft: "10px" }}>833-612-1634</span>
          </a>
        </div>
        {/* <Button className={`hamburg-btn ${state ? 'active' : ''}`} onClick={sidebarHandler}>
          <span />
          <span />
          <span />
        </Button>
        <Drawer
          placement="right"
          closable={false}
          onClose={sidebarHandler}
          width="285px"
          className="mobile-header"
          visible={state}
        >
          <CloseDrawer>
            <button onClick={sidebarHandler}>
              <IoIosClose />
            </button>
          </CloseDrawer>
          <MobileMenu className="main-menu" />
        </Drawer> */}
      </MobileNavbar>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
