import React from 'react'
import { PromoSection, SubTitlePromo, Paragraph, TitlePromo } from './promo'
import { Container } from '../../box/absoluteBox'
import {WrapperColumn} from '../../box/flexBox'

interface Props{
    title: string;
    description: string;
    particle: string;
    height: string;
    background: string;
}

const Promo = ({title, description, particle, height, background}:Props) => {
   
    return (
        <PromoSection ht={`${height}`+ 'px'} bphone={`${background}`}>
            <Container>
                <WrapperColumn>
                    <SubTitlePromo>The Venue {particle}</SubTitlePromo>
                    <TitlePromo>{title}</TitlePromo>
                    {{description}&&<Paragraph>{description}</Paragraph>}
                </WrapperColumn>  
            </Container>
        </PromoSection>
    )
}

export default Promo