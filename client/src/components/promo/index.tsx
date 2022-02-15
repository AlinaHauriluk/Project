import React from "react";
import { PromoSection, SubTitlePromo, Paragraph, TitlePromo } from "./promo";
import { Container } from "../../box/absoluteBox";
import { FlexColumn } from "../../box/flexBox";

interface PromoProps {
  title: string;
  description?: string;
  particle?: string;
  height: string;
  background: string;
  margin?: string;
  position?: string;
}

const Promo: React.FC<PromoProps> = ({
  title,
  description,
  particle,
  height,
  background,
  margin,
  position,
}) => {
  return (
    <PromoSection
      ht={`${height}` + "px"}
      bphone={background}
      position={`${position}`}
    >
      <Container>
        <FlexColumn>
          <SubTitlePromo mg={`${margin}` + "px"}>
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
