import AppBar from 'pages/AppBar';
import { Container } from 'pages/Page.styled';
import React, { Suspense, lazy } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import Loading from 'components/Loading/Loading';

const Posts = lazy(() => import('./pages/PostsPage'));
const Create = lazy(() => import('./pages/CreatePage'));

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <AppBar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}
