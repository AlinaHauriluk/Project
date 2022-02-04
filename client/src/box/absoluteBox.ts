import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    height: 100%;
`
export const SectionContainer = styled.div`
    padding: 80px 0;
`

export const BlockDescription = styled.div`
    padding: 30px;
    z-index: 2;
    border: ${({theme}) => theme.colors.secondary} 3px solid;
    background-color: ${({theme}) => theme.colors.primary};
`

