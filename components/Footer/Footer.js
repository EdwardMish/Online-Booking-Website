import React from "react";
import PropTypes from "prop-types";
import FooterWrapper, { MenuWrapper, CopyrightArea, ImageWrapper } from "./Footer.style";
import Container from "components/UI/Container/Container";
import { Row, Col } from "antd";
const footerImage = "/images/footer.png";
import SocialBar from "components/SocialShare/SocialBar";
import { useRouter } from "next/router";

const Footer = ({ logo, menu, secondaryMenu, copyright, className, path }) => {
  const router = useRouter();
  return (
    <Container>
      {!router.asPath.includes("/hotel/") && (
        <ImageWrapper>
          <img src={footerImage} />
          <p>True Experience is not a Passive Activity</p>
          <h3>True Experience is Participatory, Immersive And Fun!</h3>
        </ImageWrapper>
      )}
      <FooterWrapper id="footer" className={className}>
        <Row gutter={10}>
          <Col xl={6} xs={24}>
            <div className="footer-col-1">
              <h3>Reservations Center</h3>
              <p>833-612-1634</p>
              <p>Booking@reservations-center.com</p>
            </div>
            <SocialBar />
          </Col>
          <Col xl={12} xs={24} style={{ textAlign: "center" }}>
            {<CopyrightArea>{copyright}</CopyrightArea>}
          </Col>
          {/* <Col xl={4} xs={24} className="menu-w">
            {menu && (
              <>
                <h3 style={{ margin: '0 30px' }}>Support</h3>
                <MenuWrapper>{menu}</MenuWrapper>
              </>
            )}
          </Col> */}
          <Col xl={6} xs={24} className="menu-w">
            {secondaryMenu && (
              <>
                <h3 style={{ margin: "0 30px" }}>More</h3>
                <MenuWrapper>{secondaryMenu}</MenuWrapper>
              </>
            )}
          </Col>
        </Row>
      </FooterWrapper>
    </Container>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.element,
  menu: PropTypes.element,
  bgSrc: PropTypes.string,
  copyright: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Footer;
