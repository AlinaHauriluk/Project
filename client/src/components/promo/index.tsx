import React from 'react'
import { PromoSection, SubTitlePromo, Paragraph, TitlePromo } from './promo'
import { Container } from '../../box/absoluteBox'
import { FlexColumn } from '../../box/flexBox'

interface PromoProps{
  title: string;
  description?: string;
  particle: string;
  height: string;
  background: string;
}

const Promo: React.FC<PromoProps> = ({title, description, particle, height, background}) => {
   
  return (
    <PromoSection ht={`${height}`+ 'px'} bphone={background}>
      <Container>
        <FlexColumn>
          <SubTitlePromo>The Venue {particle}</SubTitlePromo>
            <TitlePromo>{title}</TitlePromo>
              {description && <Paragraph>{description}</Paragraph>}
        </FlexColumn>  
      </Container>
    </PromoSection>
  )
}

export default Promo