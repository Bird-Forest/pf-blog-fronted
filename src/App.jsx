import CreatePost from 'components/Posts/CreatePost';
import AppBar from 'pages/AppBar';
// import Post from 'components/Post';
import { Container } from 'pages/Page.styled';
import React from 'react';

export default function App() {
  return (
    <Container>
      <AppBar />
      <CreatePost />
    </Container>
  );
}
