import React from 'react';
import Post from './Post';
import { WrapList, WrapPanelPost } from './Posts.styled';
import UserPanel from './UserPanel';
import { nanoid } from '@reduxjs/toolkit';
import EmptyPage from 'components/Helper/EmptyPage';

export default function PostsList({ posts }) {
  const Arr = Array.isArray(posts) && posts.length > 0;
  return (
    <WrapList>
      {Arr ? (
        posts.map(post => (
          <WrapPanelPost key={nanoid()}>
            <UserPanel key={nanoid()} post={post} />
            <Post key={nanoid()} post={post} />
          </WrapPanelPost>
        ))
      ) : (
        <EmptyPage message={"There's nothing here yet"} />
      )}
    </WrapList>
  );
}
