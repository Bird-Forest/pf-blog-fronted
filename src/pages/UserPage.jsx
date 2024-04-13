import React from 'react';
import { useGetUserPostsQuery } from '../redux/PostsSlice';
import EmptyPage from 'components/Helper/EmptyPage';
import UserPostsList from 'components/Posts/UserPostsList';
import Loading from 'components/Helper/Loading';
import { WrapPostPage } from 'components/Posts/Posts.styled';

export default function UserPage() {
  const { data: posts, error, isLoading } = useGetUserPostsQuery();
  return (
    <WrapPostPage>
      {isLoading ? <Loading /> : <UserPostsList posts={posts} />}
      {error && (
        <EmptyPage
          message={'The service is temporarily unavailable. Try later'}
        />
      )}
    </WrapPostPage>
  );
}
