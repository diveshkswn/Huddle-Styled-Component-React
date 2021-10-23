import styled from 'styled-components';
import { Button } from './Button.styled';

export const MainSectionContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

font-family: 'Poppins', sans-serif;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

export const MainSectionButton = styled(Button)`
margin: 20px 0px;
color : white;
background-color: ${(props) => props.theme.color_Pink};
&:hover{
    background-color: ${(props) => props.theme.color_Light_Pink};
}

`;

export const MainSectionImageContainer = styled.div`
position: relative;
width: 100%;
min-height: 500px;
`;

export const MainSectionImage = styled.img`
position: absolute;
height: 100%;
width: 100%;
object-fit: contain;

`;

export const StatsContainer = styled.div`
min-height : 200px;
width: 50%;
display: flex;
justify-content: center;
align-items: center;


@media(max-width : ${(props) => props.theme.tabWidth}){
    flex-direction: column;
    justify-content: space-between;
    min-height : 500px;
}
`;

export const StatsDataContainer = styled.div`
width: 60%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;



`;

export const StatsIconContainer = styled.div`

position: relative;
width: 50px;
height:50px;
`;

export const StatsIcon = styled.img`
position: absolute;
height: 100%;
width: 100%;
object-fit: contain;

`;

export const Stats = styled.p`

font-size: 65px;
margin: 0;
font-weight: bold;
`;

export const StatsInfo = styled.p`
color: gray;
width: 50%;
text-align: center;
`;
