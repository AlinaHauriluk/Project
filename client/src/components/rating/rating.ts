import styled from "styled-components";

export const Star = styled.span`
  cursor: pointer;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;

  ::before{
    content: '\u2605';
    color: ${({theme}) => theme.colors.colorText};
    font-size: ${({theme}) => theme.fontSize.mediumLarge};
  }

  :hover{
    ::before{
      content: '\u2605';
      color: ${({theme}) => theme.colors.secondary};
    }
  }
`
export const ClickedStar = styled(Star)`
  ::before{
    content: '\u2605';
    color: ${({theme}) => theme.colors.secondary};
  }
`
