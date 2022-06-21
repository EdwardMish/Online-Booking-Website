import React from "react";
import Link from "next/link";

import {
  HOME_PAGE,
  TERMS_PAGE,
  PRIVACY_PAGE,
  PRICING_PLAN_PAGE,
  AGENT_PROFILE_PAGE,
} from "../../../settings/constant";

const FooterMenu = () => {
  return (
    <>
      <ul className="ant-menu">
        <li>
          <Link href="/my-booking">
            <a>My Booking</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>

        {/* <li>
          <Link href={`${HOME_PAGE}`}>
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href={`${HOME_PAGE}`}>
            <a>Reviews</a>
          </Link>
        </li> */}
        <li>
          <Link href={`${TERMS_PAGE}`}>
            <a>Terms</a>
          </Link>
        </li>
        <li>
          <Link href={`${PRIVACY_PAGE}`}>
            <a>Privacy</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default FooterMenu;
