import React from 'react';
import { WrapRender } from './Page.styled';
import { useGetPostsQuery } from '../redux/PostsSlice';
import PostsList from 'components/Posts/PostsList';
import EmptyPage from 'components/Helper/EmptyPage';

export default function PostsPage() {
  const { data: posts, error } = useGetPostsQuery();

  return (
    <WrapRender>
      {error ? (
        <EmptyPage
          message={'The service is temporarily unavailable. Try later'}
        />
      ) : (
        <PostsList posts={posts} />
      )}
    </WrapRender>
  );
}
