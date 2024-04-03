import React from 'react';
import { WrapLink, WrapUserList } from 'components/Posts/Posts.styled';
import Post from 'components/Posts/Post';
import EmptyPage from 'components/Helper/EmptyPage';
import { nanoid } from '@reduxjs/toolkit';
import { useLocation } from 'react-router-dom';

export default function UserPostsList({ posts }) {
  const location = useLocation();

  const Arr = Array.isArray(posts) && posts.length > 0;
  return (
    <WrapUserList>
      {Arr ? (
        posts.map(post => (
          <WrapLink
            key={nanoid()}
            to={`${post._id}`}
            state={{ from: location }}
          >
            <Post key={nanoid()} post={post} />
          </WrapLink>
        ))
      ) : (
        <EmptyPage message={"There's nothing here yet"} />
      )}
    </WrapUserList>
  );
}
