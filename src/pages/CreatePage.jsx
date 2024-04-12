import React from 'react';
import { WrapRender } from './Page.styled';
import CreatePost from '../components/Posts/CreatePost';

export default function CreatePage() {
  return (
    <WrapRender>
      <CreatePost />
    </WrapRender>
  );
}
