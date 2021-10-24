import styled from 'styled-components';
import { Button } from './Button.styled';

export const GetStartedMainContainer = styled.div`
width: 100%;
min-height: 450px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

`;

export const GetStartedHeader = styled.h1`
text-align: center;
font-weight: 800;
`;

export const GetStartedButton = styled(Button)`
color: white;
background-color: ${(props) => props.theme.color_Pink};
`;
