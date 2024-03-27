import React from 'react';
import Post from './Post';
import { WrapPostsList } from './Posts.styled';
import EmptyPage from './EmptyPage';

export default function PostsList({ posts, ...otherProps }) {
  const Arr = Array.isArray(posts) && posts.length > 0;
  return (
    <WrapPostsList>
      {Arr ? (
        posts.map(post => <Post key={post._id} post={post} {...otherProps} />)
      ) : (
        <EmptyPage />
      )}
    </WrapPostsList>
  );
}
