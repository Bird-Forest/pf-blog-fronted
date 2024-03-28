import React from 'react';
import { WrapRender } from './Page.styled';
// import CreatePost from 'components/Posts/CreatePost';
import EmptyPage from 'components/Posts/EmptyPage';

export default function CreatePage() {
  return (
    <WrapRender>
      {/* <CreatePost /> */}
      <EmptyPage />
    </WrapRender>
  );
}
