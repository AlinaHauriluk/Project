import React from "react";
import Nav from "../nav";
import { Container } from "../../box/absolute-box";
import {
  ButtonSecondary,
  HeaderSection,
  LogoTitle,
  LogoSubtitle,
  HeaderFlex,
  Button,
  FlipInX,
} from "./header";

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <HeaderFlex>
          <FlipInX>
            <LogoTitle>The Venue</LogoTitle>
            <LogoSubtitle>restaurant</LogoSubtitle>
          </FlipInX>

          <Nav />

          <div>
            <Button>Log In</Button>
            <ButtonSecondary>Sign Up</ButtonSecondary>
          </div>
        </HeaderFlex>
      </Container>
    </HeaderSection>
  );
};

export default Header;
