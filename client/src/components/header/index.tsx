import React from "react";
import Nav from "../nav";
import { Container } from "../../box/absoluteBox";
import { ButtonSecondary, HeaderSection, LogoTitle, LogoSubtitle,  HeaderWrapper, Button, FlipInX } from "./header";

const Header = () => {
    return (
        <HeaderSection>
            <Container>
                <HeaderWrapper>
                    <FlipInX>
                        <LogoTitle>The Venue</LogoTitle>
                        <LogoSubtitle>restaurant</LogoSubtitle>
                    </FlipInX>

                    <Nav /> 

                    <div>
                        <Button>Log In</Button>
                        <ButtonSecondary>Sign Up</ButtonSecondary>
                    </div>

                </HeaderWrapper>
            </Container>
        </HeaderSection>
    )     
}

export default Header