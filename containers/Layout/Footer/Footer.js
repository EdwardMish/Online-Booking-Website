import React from 'react';
import Logo from 'components/UI/Logo/Logo';
import Footers from 'components/Footer/Footer';
import FooterMenu from './FooterMenu';
// import FooterSecondaryMenu from './FooterSecondaryMenu';

const Footer = ({ path }) => {
  return (
    <Footers
      path={path}
      logo={<Logo withLink linkTo="/" src="/images/logo-alt.svg" title="Reservations Center" />}
      // menu={<FooterMenu />}
      secondaryMenu={<FooterMenu />}
      copyright={`© ${new Date().getFullYear()} All Rights Reserved`}
    />
  );
};

export default Footer;
