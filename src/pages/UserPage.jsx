import React from 'react';
import { WrapRender } from './Page.styled';
import { useGetUserPostsQuery } from '../redux/PostsSlice';
import EmptyPage from 'components/Helper/EmptyPage';
import UserPostsList from 'components/Posts/UserPostsList';
import Loading from 'components/Helper/Loading';

export default function UserPage() {
  const { data: posts, error, isLoading } = useGetUserPostsQuery();
  return (
    <WrapRender>
      {isLoading ? <Loading /> : <UserPostsList posts={posts} />}
      {error && (
        <EmptyPage
          message={'The service is temporarily unavailable. Try later'}
        />
      )}
    </WrapRender>
  );
}
