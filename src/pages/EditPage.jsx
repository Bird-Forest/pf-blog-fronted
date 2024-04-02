import React from 'react';
import { WrapRender } from './Page.styled';
import { useGetPostsQuery } from '../redux/PostsSlice';
import EditListOfPosts from 'components/Posts/EditListOfPosts';
import EmptyPage from 'components/Helper/EmptyPage';

export default function EditPage() {
  const { data: posts, error } = useGetPostsQuery();
  return (
    <WrapRender>
      {error ? (
        <EmptyPage
          message={'The service is temporarily unavailable. Try later'}
        />
      ) : (
        <EditListOfPosts posts={posts} />
      )}
    </WrapRender>
  );
}
