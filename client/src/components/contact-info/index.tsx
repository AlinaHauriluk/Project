import React from "react";
import * as _  from "./contact-info";
import { Container } from "../../box/absolute-box";
import { BlockSubTitle, BlockTitle } from "../../text/text";
import { FlexSpaceBetween, FlexStartColumn } from "../../box/flex-box";

const contacts = [
  { id: 1, title: "Address:", info: "481 Creekside Lane Avila CA" },
  { id: 2, title: "Phone:", info: "+53 345 7953 32453" },
  { id: 3, title: "Email:", info: "yourmail@gmail" },
];

const ContactInfo = () => {
  return (
    <_.ContactInfoSection>
      <Container>
        <BlockSubTitle>Contact Info</BlockSubTitle>
        <FlexSpaceBetween>
          <_.ContactInfoWrapperLeft>
            <_.ContactInfoText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque, at rutrum nulla
              dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
              Ut non justo eleifend, facilisis nibh ut, interdum odio.
              Suspendisse potenti.
            </_.ContactInfoText>
            <BlockTitle>The Venue</BlockTitle>
            <_.ContactInfoSubtitleLogo>restaurant</_.ContactInfoSubtitleLogo>
          </_.ContactInfoWrapperLeft>
          <_.ContactInfoWrapperRight>
            <FlexStartColumn>
              {contacts.map(contact =>
                <_.ContactInfoContainer key={contact.id}>
                  <_.ContactInfoTitle>{contact.title}</_.ContactInfoTitle>
                  <_.ContactInfoDescription href={contact.info}>{contact.info}</_.ContactInfoDescription>
                </_.ContactInfoContainer>
              )}
            </FlexStartColumn>
          </_.ContactInfoWrapperRight>
        </FlexSpaceBetween>
      </Container>
    </_.ContactInfoSection>
  );
};

export default ContactInfo;
