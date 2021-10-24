/* eslint-disable max-len */
import React from 'react';
import {
  FooterMainContainer, FooterTopBorderImage, FooterTopBorderImageContainer, FooterContent,
  NewsLetterContainer, CompanyInfoContainer, NewsLetterButton, NewsLetterInput, NewsLetterPara, NewsLetterTitle,
  AboutCompany, CompanyEmail, CompanyLogoContainer, CompanyLogoImage, CompanyPhone,
} from '../styles/Footer.styled';

export default function Footer() {
  return (
    <FooterMainContainer>
      <FooterTopBorderImageContainer>
        <FooterTopBorderImage src="/images/bg-footer-top-desktop.svg" />
      </FooterTopBorderImageContainer>

      <FooterContent>
        <CompanyInfoContainer>
          <CompanyLogoContainer>
            <CompanyLogoImage src="/images/logo.svg" />
          </CompanyLogoContainer>
          <AboutCompany>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut enim numquam nesciunt optio illum non. Blanditiis exercitationem commodi error eaque consequatur. Rerum ex vitae quisquam eos, dolores sed tenetur?</AboutCompany>
          <CompanyPhone>+91 89829836382728</CompanyPhone>
          <CompanyEmail>abcd@gmail.com</CompanyEmail>
        </CompanyInfoContainer>

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
