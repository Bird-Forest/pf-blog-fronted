import React from 'react';
import Post from './Post';
import { WrapList, WrapPanelPost } from './Posts.styled';
import UserPanel from './UserPanel';
import { nanoid } from '@reduxjs/toolkit';
// import { base } from 'baseTheme';

export default function PostsList({ posts, ...otherProps }) {
  const Arr = Array.isArray(posts) && posts.length > 0;
  return (
    <WrapList>
      {Arr &&
        posts.map(post => (
          <WrapPanelPost key={nanoid()}>
            <UserPanel key={nanoid()} post={post} />
            <Post key={nanoid()} post={post} />
          </WrapPanelPost>
        ))}
    </WrapList>
  );
}
