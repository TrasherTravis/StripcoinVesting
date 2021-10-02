import React from "react";
import { ContainerLogo, Image, VestingImage } from "./styles";

const Header: React.FC<{ isMobile?: boolean; vesting?: boolean }> = ({
  isMobile,
  vesting,
}) => {
  return (
    <ContainerLogo isMobile={isMobile}>
      <Image
        src="images/splash1.png"
        alt="Logo"
        width={vesting && "200px"}
        vesting={vesting}
      />
      {vesting ? (
        <VestingImage src="images/vest.png" />
      ) : (
        <Image src={"images/stripecoin.png" } />
      )}
      {/* <img src='images/splashpresale.png'/>*/}
    </ContainerLogo>
  );
};

export default Header;
