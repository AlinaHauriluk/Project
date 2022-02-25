import React from "react";
import { Container } from "../../box/absolute-box";
import { FlexColumn } from "../../box/flex-box";
import { CSSProperties } from "styled-components";
import { PromoSection, SubTitlePromo, TitlePromo, Paragraph } from "./promo";

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
    <_.PromoSection
      style={{
        height: "560px",
        ...(style || {}),
      }}
    >
      <Container>
        <FlexColumn>
          <_.SubTitlePromo>The Venue {particle}</_.SubTitlePromo>
          <_.TitlePromo>{title}</_.TitlePromo>
          {description && <_.Paragraph>{description}</_.Paragraph>}
        </FlexColumn>
      </Container>
    </_.PromoSection>
  );
};

export default Promo;
