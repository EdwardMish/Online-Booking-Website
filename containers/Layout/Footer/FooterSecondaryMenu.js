import React from 'react';
import Link from 'next/link';

import { HOME_PAGE } from '../../../settings/constant';

const FooterSecondaryMenu = () => {
  return (
    <>
      <ul className="ant-menu">
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>

        <li>
          <Link href={`${HOME_PAGE}`}>
            <a>Accessibility</a>
          </Link>
        </li>
        <li>
          <Link href={`${HOME_PAGE}`}>
            <a>Extended</a>
          </Link>
        </li>
        <li>
          <Link href={`${HOME_PAGE}`}>
            <a>Groups</a>
          </Link>
        </li>
        <li>
          <Link href={`${HOME_PAGE}`}>
            <a>Sitemap</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default FooterSecondaryMenu;
