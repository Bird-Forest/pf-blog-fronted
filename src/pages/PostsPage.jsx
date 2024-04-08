import React from 'react';
import { WrapRender } from './Page.styled';
import { useGetPostsQuery } from '../redux/PostsSlice';
import PostsList from 'components/Posts/PostsList';
import EmptyPage from 'components/Helper/EmptyPage';
import Loading from 'components/Helper/Loading';
// import { WrapPostPage } from 'components/Posts/Posts.styled';

export default function PostsPage() {
  const { data: posts, error, isLoading } = useGetPostsQuery();

  return (
    <WrapRender>
      {/* <WrapPostPage> */}
      {isLoading ? <Loading /> : <PostsList posts={posts} />}
      {error && (
        <EmptyPage
          message={'The service is temporarily unavailable. Try later'}
        />
      )}
      {/* </WrapPostPage> */}
    </WrapRender>
  );
}
