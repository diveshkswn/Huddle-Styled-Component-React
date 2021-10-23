import styled from 'styled-components';

export const Paragraph = styled.div`
width: 40%;
text-align: center;

@media(max-width : ${(props) => props.theme.mobileWidth}){
    width: 70%;
}

`;
