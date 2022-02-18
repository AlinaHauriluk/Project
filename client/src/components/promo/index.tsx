import React from "react";
import { PromoSection, SubTitlePromo, Paragraph, TitlePromo } from "./promo";
import { Container } from "../../box/absoluteBox";
import { FlexColumn } from "../../box/flexBox";
import { CSSProperties } from "styled-components";

interface PromoProps {
  title: string;
  description?: string;
  particle?: string;
  style?: CSSProperties;
}

const Promo: React.FC<PromoProps> = ({
  title,
  description,
  particle,
  style,
}) => {
  return (
    <PromoSection
      style={{
        height: '480px',
        ...(style || {})
      }}
    >
      <Container>
        <FlexColumn>
          <SubTitlePromo>The Venue {particle}</SubTitlePromo>
          <TitlePromo>{title}</TitlePromo>
          {description && <Paragraph>{description}</Paragraph>}
        </FlexColumn>
      </Container>
    </PromoSection>
  );
};

export default Promo;

