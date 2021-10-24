import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/Global.styled';
import { MainAppContainer } from './styles/App.styled';
import Header from './components/Header';
import MainSection from './components/MainSection';
import { title, Paragraph, Content } from './data';
import SecondarySection from './components/SecondarySection';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
  const theme = {
    color_Pink: 'hsl(322, 100%, 66%)',
    color_Light_Pink: 'hsl(321, 100%, 78%)',
    color_Light_Red: 'hsl(0, 100%, 63%)',
    color_Dark_Cyan: 'hsl(192, 100%, 9%)',
    color_Light_Cyan: '#F6FBFF',
    color_Pale_Blue: 'hsl(207, 100%, 98%)',

    mobileWidth: '410px',
    tabWidth: '810px',

  };

  return (
    <ThemeProvider theme={theme}>
      <MainAppContainer>
        {/* Global styles from styled-component */}
        <GlobalStyle />

        <Header />

        <MainSection title={title} para={Paragraph} />
        <SecondarySection SectionData={Content} />
        <GetStarted />
        <Footer />
      </MainAppContainer>
    </ThemeProvider>
  );
}

export default App;
