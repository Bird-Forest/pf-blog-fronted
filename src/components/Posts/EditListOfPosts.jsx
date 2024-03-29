import React from 'react';
import {
  WrapBtnEdit,
  WrapEditList,
  WrapItem,
} from 'components/Posts/Posts.styled';
import Post from 'components/Posts/Post';
import EmptyPage from 'components/Helper/EmptyPage';
import { nanoid } from '@reduxjs/toolkit';
import { useDeletePostMutation } from '../../redux/PostsSlice';

export default function EditListOfPosts({ posts }) {
  const [deletePost] = useDeletePostMutation();
  // const [showModal, setShowModal] = useState(false);

  const onDelete = evt => {
    // console.log(evt.target.name);
    const id = evt.target.name;
    deletePost(id);
  };
  const onEdit = evt => {
    console.log(evt.target.name);
  };
  const Arr = Array.isArray(posts) && posts.length > 0;
  return (
    <WrapEditList>
      {Arr ? (
        posts.map(post => (
          <WrapItem key={nanoid()}>
            <Post key={nanoid()} post={post} />
            <WrapBtnEdit key={nanoid()}>
              <button key={nanoid()} name={post._id} onClick={onEdit}>
                edit
              </button>
              <button key={nanoid()} name={post._id} onClick={onDelete}>
                delete
              </button>
            </WrapBtnEdit>
          </WrapItem>
        ))
      ) : (
        <EmptyPage />
      )}
    </WrapEditList>
  );
}
