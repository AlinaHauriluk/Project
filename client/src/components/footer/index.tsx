import React from "react";
import * as _ from "./footer";
import { FlexContainerSpace, FlexStartColumn } from "../../box/flex-box";

const contacts = [
  { id: 1, title: "Address:", info: "481 Creekside Lane Avila CA" },
  { id: 2, title: "Phone:", info: "+53 345 7953 32453" },
  { id: 3, title: "Email:", info: "yourmail@gmail" },
];

const Footer = () => {
  return (
    <_.FooterBlock>
      <FlexContainerSpace>
        <_.FooterLogo>
          <_.FooterLogoTitle>The Venue</_.FooterLogoTitle>
          <_.FooterLogoSubTitle>restaurant</_.FooterLogoSubTitle>
        </_.FooterLogo>
        <_.FooterDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut
          ac ligula sapien.
        </_.FooterDescription>
        <FlexStartColumn>
          {contacts.map((contact) => (
            <_.FooterList key={contact.id}>
              <_.FooterContactTitle>{contact.title}</_.FooterContactTitle>
              <_.FooterContactInfo href={contact.info}>{contact.info}</_.FooterContactInfo>
            </_.FooterList>
          ))}
        </FlexStartColumn>
      </FlexContainerSpace>
    </_.FooterBlock>
  );
};

export default Footer;
