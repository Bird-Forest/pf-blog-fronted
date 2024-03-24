import React from 'react';
import { WrapRender } from './Page.styled';
import CreatePost from 'components/Posts/CreatePost';
import Post from 'components/Posts/Post';

export default function CreatePage() {
  return (
    <WrapRender>
      <CreatePost />
      <Post />
    </WrapRender>
  );
}
