import AppBar from 'pages/AppBar';
import { Container } from 'pages/Page.styled';
import React, { Suspense, lazy } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import Loading from 'components/Loading/Loading';
import { ThemeProvider } from 'styled-components';
import { base } from './baseTheme';

const Posts = lazy(() => import('./pages/PostsPage'));
const Create = lazy(() => import('./pages/CreatePage'));
const Edit = lazy(() => import('./pages/EditPage'));

export default function App() {
  return (
    <ThemeProvider theme={base}>
      <Container>
        <AppBar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </Suspense>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}
