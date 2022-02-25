import type {FC} from "react";
import { FlexContainerSpace, FlexStartColumn } from "../../box/flex-box";
import {
  FooterBlock,
  FooterLogo,
  FooterLogoTitle,
  FooterLogoSubTitle,
  FooterDescription,
  FooterList,
  FooterContactTitle,
  FooterContactInfo,
} from "./footer";


const contacts = [
  { id: 1, title: "Address:", info: "481 Creekside Lane Avila CA" },
  { id: 2, title: "Phone:", info: "+53 345 7953 32453" },
  { id: 3, title: "Email:", info: "yourmail@gmail" },
];

const Footer:FC = () => {
  return (
    <FooterBlock>
      <FlexContainerSpace>
        <FooterLogo>
          <FooterLogoTitle>The Venue</FooterLogoTitle>
          <FooterLogoSubTitle>restaurant</FooterLogoSubTitle>
        </FooterLogo>
        <FooterDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut
          ac ligula sapien.
        </FooterDescription>
        <FlexStartColumn>
          {contacts.map((contact) => (
            <FooterList key={contact.id}>
              <FooterContactTitle>{contact.title}</FooterContactTitle>
              <FooterContactInfo href={contact.info}>
                {contact.info}
              </FooterContactInfo>
            </FooterList>
          ))}
        </FlexStartColumn>
      </FlexContainerSpace>
    </FooterBlock>
  );
};

export default Footer;
