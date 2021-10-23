import styled from 'styled-components';

export const SecondarySectionMainContainer = styled.div`
width: 100%;
min-height: 500px;
`;

export const SectionContainer = styled.div`

width:100%;
height: 100%;

`;

export const SectionContent = styled.div`
width: 100%;
height: 300px;
display: flex;
justify-content: space-evenly;
align-items: center;
background-color: ${(props) => (props.id === 2 ? 'white' : props.theme.color_Light_Cyan)};

@media(max-width : ${(props) => props.theme.tabWidth}){
    flex-direction: column;
    height: 50vh;
    justify-content: space-between;
}
`;

export const SectionBorderImageContainer = styled.div`
position: relative;
width: 100%;
height: 50px;


`;

export const SectionBorderImage = styled.img`
position: absolute;
width: 100%;
height:100%;
object-fit: fill;
`;

export const SectionDetailContainer = styled.div`
padding: 50px;
width: 600px;
height: 100%;
@media(max-width : ${(props) => props.theme.tabWidth}){
    width: 90vw;
    padding: 10px;
}
`;
export const SectionPara = styled.p`
text-align: left;
`;

export const SectionTitle = styled.h3`
font-weight: 800;
font-size: 40px;
@media(max-width : ${(props) => props.theme.tabWidth}){
    font-size: 20px;
}
`;
export const SectionImageContainer = styled.div`
position: relative;
width: 500px;
height: 100%;

@media(max-width : ${(props) => props.theme.tabWidth}){
    width: 200px;
    
}
`;

export const SectionImage = styled.img`
position: absolute;
width: 100%;
height:100%;
object-fit: contain;
`;
