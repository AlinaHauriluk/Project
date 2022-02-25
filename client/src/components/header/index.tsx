import React from "react";
import Nav from "../nav";
import { Container } from "../../box/absolute-box";
import * as _ from "./header";

const Header = () => {
  return (
    <_.HeaderSection>
      <Container>
        <_.HeaderFlex>
          <_.FlipInX>
            <_.LogoTitle>The Venue</_.LogoTitle>
            <_.LogoSubtitle>restaurant</_.LogoSubtitle>
          </_.FlipInX>

          <Nav />

          <div>
            <_.Button>Log In</_.Button>
            <_.ButtonSecondary>Sign Up</_.ButtonSecondary>
          </div>
        </_.HeaderFlex>
      </Container>
    </_.HeaderSection>
  );
};

export default Header;
