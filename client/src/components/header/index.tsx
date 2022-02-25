import type {FC} from "react";
import Nav from "../nav";
import { Container } from "../../box/absolute-box";
import { Button } from "./header";
import {
  HeaderSection,
  HeaderFlex,
  FlipInX,
  LogoTitle,
  LogoSubtitle,
  ButtonSecondary,
} from "./header";

const Header:FC = () => {
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
