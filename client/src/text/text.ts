import styled from "styled-components"

export const Title = styled.h3`
  color: ${({theme}) => theme.colors.primary};
  font-size: ${({theme}) => theme.fontSize.subtitle};
`

export const SubTitle = styled.h2`
  color: ${({theme}) => theme.colors.secondary};
  font-family: ${({theme}) => theme.fontFamily.cursiv};
`
