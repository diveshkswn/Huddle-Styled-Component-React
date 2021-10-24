/* eslint-disable max-len */
import React from 'react';
import {
  FooterMainContainer, FooterTopBorderImage, FooterTopBorderImageContainer, FooterContent,
  NewsLetterContainer, CompanyInfoContainer, NewsLetterButton, NewsLetterInput, NewsLetterPara, NewsLetterTitle,
} from '../styles/Footer.styled';

export default function Footer() {
  return (
    <FooterMainContainer>
      <FooterTopBorderImageContainer>
        <FooterTopBorderImage src="/images/bg-footer-top-desktop.svg" />
      </FooterTopBorderImageContainer>
      <FooterContent>
        <CompanyInfoContainer>INFO</CompanyInfoContainer>
        <NewsLetterContainer>
          <NewsLetterTitle>NEWSLETTER</NewsLetterTitle>
          <NewsLetterPara>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia suscipit accusamus dignissimos cupiditate deserunt culpa sit vero ullam assumenda quas.</NewsLetterPara>
          <div>
            <NewsLetterInput placeholder="Email" />
            <NewsLetterButton>Subscribe</NewsLetterButton>
          </div>

        </NewsLetterContainer>
      </FooterContent>
    </FooterMainContainer>
  );
}
