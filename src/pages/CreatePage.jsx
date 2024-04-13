import React from 'react';
import CreatePost from '../components/Posts/CreatePost';
import { WrapPostPage } from 'components/Posts/Posts.styled';

export default function CreatePage() {
  return (
    <WrapPostPage>
      <CreatePost />
    </WrapPostPage>
  );
}
