import React from 'react';
import { WrapBtnEdit, WrapEditList } from 'components/Posts/Posts.styled';
import Post from 'components/Posts/Post';
import EmptyPage from 'components/Posts/EmptyPage';
import { nanoid } from '@reduxjs/toolkit';

export default function EditListOfPosts({ posts, ...otherProps }) {
  const onDelene = evt => {
    console.log(evt.target.name);
  };
  const onEdit = evt => {
    console.log(evt.target.name);
  };
  const Arr = Array.isArray(posts) && posts.length > 0;
  return (
    <WrapEditList>
      {Arr ? (
        posts.map(post => (
          <>
            <Post key={post._id} post={post} />
            <WrapBtnEdit>
              <button key={nanoid()} name={post._id} onClick={onEdit}>
                edit
              </button>
              <button key={nanoid()} name={post._id} onClick={onDelene}>
                delete
              </button>
            </WrapBtnEdit>
          </>
        ))
      ) : (
        <EmptyPage />
      )}
    </WrapEditList>
  );
}
