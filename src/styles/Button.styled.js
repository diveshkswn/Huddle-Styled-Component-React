import styled from 'styled-components';

export const Button = styled.button`
background-color: white;
/* color: ${(props) => props.theme.color_Pink}; */
border: none;
box-shadow: 0 0  10px rgba(0,0,0,.15);
font-size: 16px;
font-weight: 700;
padding: 15px 50px;
cursor: pointer;
border-radius: 50px;
user-select: none;
transition: all 200ms ease;

&::active{
    outline: none;
}

&:hover{
    box-shadow: 0px 0px  10px rgba(0,0,0,.25);
}
`;
