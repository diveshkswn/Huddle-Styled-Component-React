/* eslint-disable max-len */
import React from 'react';
import {
  SecondarySectionMainContainer, SectionContainer, SectionContent, SectionBorderImage, SectionBorderImageContainer,
  SectionImageContainer, SectionImage, SectionPara, SectionTitle, SectionDetailContainer,
} from '../styles/SecondaySection.styled';

function populateSecondarySections(eachSection, i) {
  return (
    <SectionContainer key={i}>
      <SectionBorderImageContainer>

        {eachSection.id !== 2 && <SectionBorderImage src="/images/bg-section-top-desktop-1.svg" />}
      </SectionBorderImageContainer>

      <SectionContent id={eachSection.id} name="lol" direction={eachSection.id === 2 && 'reverse'}>
        <SectionDetailContainer>
          <SectionTitle>{eachSection.title}</SectionTitle>
          <SectionPara>{eachSection.body}</SectionPara>
        </SectionDetailContainer>

        <SectionImageContainer>
          <SectionImage src={`/images/${eachSection.image}`} />
        </SectionImageContainer>

      </SectionContent>

      <SectionBorderImageContainer>
        {eachSection.id !== 2 && <SectionBorderImage src="/images/bg-section-bottom-desktop-1.svg" />}
      </SectionBorderImageContainer>
    </SectionContainer>
  );
}
export default function SecondarySection({ SectionData }) {
  return (
    <SecondarySectionMainContainer>
      {SectionData.map(populateSecondarySections)}
    </SecondarySectionMainContainer>
  );
}
