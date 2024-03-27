import React from 'react';
import { WrapRender } from './Page.styled';
import { useGetPostsQuery } from '../redux/PostsSlice';
// import { Outlet } from 'react-router-dom';
import PostsList from 'components/Posts/PostsList';

export default function PostsPage() {
  const { data: posts, error, isLoading } = useGetPostsQuery();
  return (
    <WrapRender>
      {/* <button type="button" onClick={() => navigate('/create')}>
        Добавить материал
      </button> */}
      {error && (
        <p>
          Ой! Что-то пошло не так : Перезагрузите страницу и попробуйте еще раз.
        </p>
      )}
      {isLoading ? <b>Загружаем материалы</b> : <PostsList posts={posts} />}
      {/* <Outlet /> */}
    </WrapRender>
  );
}
