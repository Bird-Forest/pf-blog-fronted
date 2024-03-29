import React from 'react';
import { WrapRender } from './Page.styled';
import { useGetPostsQuery } from '../redux/PostsSlice';
// import { Outlet } from 'react-router-dom';
import PostsList from 'components/Posts/PostsList';
import Loading from 'components/Helper/Loading';

export default function PostsPage() {
  const { data: posts, error, isLoading } = useGetPostsQuery();

  return (
    <WrapRender>
      {error && (
        <p>
          Ой! Что-то пошло не так : Перезагрузите страницу и попробуйте еще раз.
        </p>
      )}
      {isLoading ? <Loading /> : <PostsList posts={posts} />}
      {/* <Outlet /> */}
    </WrapRender>
  );
}
