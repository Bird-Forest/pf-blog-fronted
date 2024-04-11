import AppBar from 'x_files/AppBar';
import { Container } from 'pages/Page.styled';
import React, { Suspense, lazy } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import Loading from 'components/Helper/Loading';
import { ThemeProvider } from 'styled-components';
import { base } from './baseTheme';
// import { useGetUserQuery } from './redux/UserSlice';

const PostsPage = lazy(() => import('./pages/PostsPage'));
const CreatePage = lazy(() => import('./pages/CreatePage'));
const UserPage = lazy(() => import('./pages/UserPage'));
const UserPost = lazy(() => import('./components/Posts/UserPost'));
const Enter = lazy(() => import('./pages/EnterPage'));
const Profile = lazy(() => import('./components/Users/Profile'));
const Signup = lazy(() => import('./components/Auth/SignUp'));
const Signin = lazy(() => import('./components/Auth/SignIn'));

export default function App() {
  // const id = JSON.parse(window.localStorage.getItem('id'));
  // const id = '66165b5638f9785fec4ddbe1';
  // const { data: user } = useGetUserQuery();
  // console.log(user);

  return (
    <ThemeProvider theme={base}>
      <Container>
        <AppBar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<PostsPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/user-posts" element={<UserPage />} />
            <Route path="/user-posts/:id" element={<UserPost />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/enter" element={<Enter />}>
              <Route path="sign-up" element={<Signup />} />
              <Route path="sign-in" element={<Signin />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}
