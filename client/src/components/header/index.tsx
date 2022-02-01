import React from "react";
import Nav from "../nav";
import { Container } from "../../box/absoluteBox";
import { ButtonSecondary, HeaderSection, LogoTitle, LogoSubtitle,  HeaderWrapper, Button, FlipInX } from "./header";
import {Link} from 'react-router-dom'

const Header:React.FC = () => {
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
                        <Button as={Link} to="/">Log In</Button>
                        <ButtonSecondary as={Link} to="/">Sign Up</ButtonSecondary>
                    </div>
                </HeaderWrapper>
            </Container>
        </HeaderSection>
    )     
}

export default Header