import React from 'react';
import { withRouter } from 'next/router';
import ActiveLink from 'library/helpers/activeLink';
import { FcPhone } from 'react-icons/fc';

const MainMenu = ({ className }) => {
  return (
    <ul className={`ant-menu ${className}`}>
      <li>
        <ActiveLink href="tel:+11231231234">
          <FcPhone /> +1 1231231234
        </ActiveLink>
      </li>
    </ul>
  );
};

export default withRouter(MainMenu);
