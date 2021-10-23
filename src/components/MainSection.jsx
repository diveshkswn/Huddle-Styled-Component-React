/* eslint-disable max-len */
import React from 'react';
import { Title } from '../styles/Title.styled';
import {
  MainSectionContainer, MainSectionButton, MainSectionImageContainer, MainSectionImage, StatsContainer, StatsDataContainer,
  StatsIconContainer, StatsIcon, Stats, StatsInfo,

} from '../styles/MainSection.styled';
import { Paragraph } from '../styles/Paragraph.styled';

export default function MainSection({ title, para }) {
  return (
    <MainSectionContainer>
      <Title>{title}</Title>
      <Paragraph>
        {para}
      </Paragraph>
      <MainSectionButton>Get Started for Free</MainSectionButton>
      <MainSectionImageContainer>

        <MainSectionImage src="/images/screen-mockups.svg" alt="" />
      </MainSectionImageContainer>
      <StatsContainer>
        <StatsDataContainer>
          <StatsIconContainer>
            <StatsIcon src="/images/icon-communities.svg" />
          </StatsIconContainer>
          <Stats>1.4k+</Stats>
          <StatsInfo>Communities Formed</StatsInfo>
        </StatsDataContainer>
        <StatsDataContainer>
          <StatsIconContainer>
            <StatsIcon src="/images/icon-messages.svg" />
          </StatsIconContainer>
          <Stats>2.7m+</Stats>
          <StatsInfo>Messages Sent</StatsInfo>
        </StatsDataContainer>
      </StatsContainer>
    </MainSectionContainer>
  );
}
