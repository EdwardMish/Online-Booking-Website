import React from "react";
import Image from "next/image";
import { Wrapper } from "./nocontents.style";

export default function NoContents() {
  return (
    <Wrapper>
      <Image src={"/images/favicon.png"} width={50} height={50} />
      <p>We're having trouble finding availability for these dates, please select different dates and try again.</p>
      <div className="call-us">
        Call Us Now for Additional Rates and Availability!
        <br />
        <a href="tel:+8336121634">833-612-1634</a>
      </div>
    </Wrapper>
  );
}
