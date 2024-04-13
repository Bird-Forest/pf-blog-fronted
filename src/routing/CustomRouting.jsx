import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from '../components/Helper/Loading';
import { WrapRender } from 'pages/Page.styled';

const PostsPage = lazy(() => import('../pages/PostsPage'));
const CreatePage = lazy(() => import('../pages/CreatePage'));
const UserPage = lazy(() => import('../pages/UserPage'));
const UserPost = lazy(() => import('../components/Posts/UserPost'));
const Enter = lazy(() => import('../pages/EnterPage'));
const Profile = lazy(() => import('../components/Users/Profile'));
const Signup = lazy(() => import('../components/Auth/SignUp'));
const Signin = lazy(() => import('../components/Auth/SignIn'));
const Logout = lazy(() => import('../pages/LogOutPage'));

export default function CustomRouting() {
  return (
    <WrapRender>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/user-posts" element={<UserPage />} />
          <Route path="/user-posts/:id" element={<UserPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/enter" element={<Enter />}>
            <Route path="sign-up" element={<Signup />} />
            <Route path="sign-in" element={<Signin />} />
          </Route>
        </Routes>
      </Suspense>
    </WrapRender>
  );
}
