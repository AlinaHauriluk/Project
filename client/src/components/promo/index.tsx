import React from "react";
import { PromoSection, SubTitlePromo, Paragraph, TitlePromo } from "./promo";
import { Container } from "../../box/absoluteBox";
import { FlexColumn } from "../../box/flexBox";

interface PromoProps {
  title: string;
  description?: string;
  particle?: string;
  aboutStyles?: string;
  homeStyles?: string;
}

const Promo: React.FC<PromoProps> = ({
  title,
  description,
  particle,
  aboutStyles,
  homeStyles,
}) => {
  return (
    <PromoSection
      style={{
        height: homeStyles && "580px",
        backgroundPosition: homeStyles && "top",
        backgroundImage: aboutStyles && `url(${require("../../assets/aboutPromoImage.jpg")})`,
      }}
    >
      <Container>
        <FlexColumn>
          <SubTitlePromo style={{ marginTop: aboutStyles && "80px" }}>
            The Venue {particle}
          </SubTitlePromo>
          <TitlePromo>{title}</TitlePromo>
          {description && <Paragraph>{description}</Paragraph>}
        </FlexColumn>
      </Container>
    </PromoSection>
  );
};

export default Promo;
