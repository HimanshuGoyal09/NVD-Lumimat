import React from "react";
import Link from "next/link";

import imgL1LogoWhite from "../../assets/image/png/lumimat-transparent-background-resized.png";
import imgL1LogoDark from "../../assets/image/jpeg/lumimat-logo-light.jpg";



const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link href="/">
      <a className={`${className}`} {...rest}>
        {white ? (
          <img src={imgL1LogoDark} alt="" />
        ) : (
          <img src={imgL1LogoWhite} alt="" />
        )}
      </a>
    </Link>
  );
};

export default Logo;
