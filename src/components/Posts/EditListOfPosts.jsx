import React, { useState } from 'react';
import {
  WrapBtnEdit,
  WrapEditList,
  WrapItem,
} from 'components/Posts/Posts.styled';
import Post from 'components/Posts/Post';
import EmptyPage from 'components/Helper/EmptyPage';
import { nanoid } from '@reduxjs/toolkit';
import {
  useDeletePostMutation,
  useGetPostByIdQuery,
  useUpdatePostMutation,
} from '../../redux/PostsSlice';
import { createPortal } from 'react-dom';
import ModalWindow from '../Helper/ModalWindow';
import EditPost from './EditPost';

export default function EditListOfPosts({ posts }) {
  const [id, setId] = useState('');
  const [showModal, setShowModal] = useState(false);

  const { data } = useGetPostByIdQuery(id);
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const onEdit = evt => {
    const id = evt.target.name;
    setId(id);
    setShowModal(true);
  };

  const onUpdatePost = (id, post) => {
    // console.log('POST', post);
    // console.log('ID', id);
    updatePost({ id, post });
  };

  const onDelete = evt => {
    const id = evt.target.name;
    deletePost(id);
  };

  const Arr = Array.isArray(posts) && posts.length > 0;
  return (
    <WrapEditList>
      {Arr ? (
        posts.map(post => (
          <WrapItem key={nanoid()}>
            <Post key={nanoid()} post={post} />
            <WrapBtnEdit key={nanoid()}>
              <button
                key={nanoid()}
                name={post._id}
                onClick={onEdit}
                className="btn"
              >
                edit
              </button>
              {showModal &&
                createPortal(
                  <ModalWindow
                    key={nanoid()}
                    onClose={() => setShowModal(false)}
                    content={
                      <EditPost
                        key={nanoid()}
                        data={data}
                        onUpdatePost={onUpdatePost}
                      />
                    }
                  />,
                  document.body
                )}
              <button
                key={nanoid()}
                name={post._id}
                onClick={onDelete}
                className="btn"
              >
                delete
              </button>
            </WrapBtnEdit>
          </WrapItem>
        ))
      ) : (
        <EmptyPage message={"There's nothing here yet"} />
      )}
    </WrapEditList>
  );
}
