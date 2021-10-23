import React from 'react';
import {
  HeaderMainContainer, HeaderImage, HeaderImageContainer, HeaderButton,
} from '../styles/Header.styled';

export default function Header() {
  return (
    <>
      <HeaderMainContainer>
        <HeaderImageContainer>
          <HeaderImage src="/images/logo.svg" alt="" />
        </HeaderImageContainer>
        <HeaderButton>Try for Free</HeaderButton>
      </HeaderMainContainer>

    </>

  );
}
