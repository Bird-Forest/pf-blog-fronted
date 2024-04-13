import AppBar from './routing/AppBar';
import { Container } from 'pages/Page.styled';
import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { base } from './baseTheme';
import CustomRouting from './routing/CustomRouting';

export default function App() {
  return (
    <ThemeProvider theme={base}>
      <Container>
        <AppBar />
        <CustomRouting />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}
