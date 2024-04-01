import React from 'react';
import Loading from 'components/Helper/Loading';
import { WrapRender } from './Page.styled';
import { useGetPostsQuery } from '../redux/PostsSlice';
import EditListOfPosts from 'components/Posts/EditListOfPosts';
// import EditPost from 'components/Posts/EditPost';

export default function EditPage() {
  const { data: posts, error, isLoading } = useGetPostsQuery();
  return (
    <WrapRender>
      {/* <EditPost /> */}
      {error && (
        <p>
          Ой! Что-то пошло не так : Перезагрузите страницу и попробуйте еще раз.
        </p>
      )}
      {isLoading ? <Loading /> : <EditListOfPosts posts={posts} />}
    </WrapRender>
  );
}
