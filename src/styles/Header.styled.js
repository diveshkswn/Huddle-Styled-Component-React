import styled from 'styled-components';
import { Button } from './Button.styled';

export const HeaderMainContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

font-family: 'Poppins', sans-serif;

height: 150px;
width: 100%;
padding: 15px 25px;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const HeaderImageContainer = styled.div`

position: relative;
min-width: 100px;
width: 25%;
height: 25%;
min-height: 50px;

@media(max-width : ${(props) => props.theme.mobileWidth}){
width: 10%;
height: 10%;
}
`;

export const HeaderImage = styled.img`
position: absolute;
height: 100%;
width: 100%;
object-fit: contain;
`;

export const HeaderButton = styled(Button)`
color: ${(props) => props.theme.color_Pink};

@media(max-width : ${(props) => props.theme.mobileWidth}){
    padding: 8px 25px;
}

`;
