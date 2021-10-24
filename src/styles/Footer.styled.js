import styled from 'styled-components';
import { Button } from './Button.styled';

export const FooterMainContainer = styled.div`
width: 100%;
min-height: 400px;

`;

export const FooterTopBorderImageContainer = styled.div`
width: 100%;
height: 150px;
position: relative;
margin: -2px;
`;

export const FooterTopBorderImage = styled.img`
position: absolute;
height:100%;
width: 100%;
object-fit: fill;
`;

export const FooterContent = styled.div`
width: 100%;
height : 400px;
background-color: ${(props) => props.theme.color_Dark_Cyan};
display: flex;
justify-content: space-between;
align-items: center;

@media(max-width : ${(props) => props.theme.tabWidth}){
    flex-direction: column;
    height: 130vh;
}
`;

export const CompanyInfoContainer = styled.div`
width: 100%;
height: 100%;
padding : 0px 10vw;
display: grid;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
background-color: aliceblue;
`;

export const NewsLetterContainer = styled.div`

width: 100%;
height: 100%;
padding : 0px 10vw;
display: grid;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
color: aliceblue;
`;

export const NewsLetterTitle = styled.h2`
font-weight: 800;

`;

export const NewsLetterPara = styled.p`
font-weight: 400;
`;

export const NewsLetterButton = styled(Button)`
border-radius: 10px;
color : white;
background-color: ${(props) => props.theme.color_Pink};
transition: all 200ms ease;
&:hover{
    background-color: ${(props) => props.theme.color_Light_Pink};
    transform: scale(1.1);
    transition: all 200ms ease;
}

`;

export const NewsLetterInput = styled.input.attrs(() => ({
  type: 'text',
}))`
outline: none;
border: none;
margin-right: 30px;
margin-bottom : 30px;
border-radius: 10px;
font-size: 20px;
width: 180px;
height: 44px;
`;
