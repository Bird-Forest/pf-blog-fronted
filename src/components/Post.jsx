import React from 'react';
import { BsFillBookmarkFill, BsCircleFill } from 'react-icons/bs';
import {
  PostText,
  WrapImgPost,
  WrapInfo,
  WrapPost,
  WrapTag,
  WrapTitle,
} from './CreatePosts/posts.styled';

export default function Post({ post }) {
  return (
    <WrapPost>
      <WrapImgPost>
        <img
          src="https://pixabay.com/get/g02a97f31e2b2dd2a1c5c8ead70592368a620fcecf86153cd167614bacc98e98b575bc6711e775dbbf84da9438f608838_640.jpg"
          alt="cat"
          className="img-post"
        />
      </WrapImgPost>
      <WrapInfo>
        <WrapTag>
          <BsFillBookmarkFill className="icon-tag" />
          <h4 className="post-tag">animal</h4>
        </WrapTag>
        <WrapTitle>
          <BsCircleFill className="icon-title" />
          <h3 className="post-title">My pet</h3>
        </WrapTitle>
        <PostText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          fugiat adipisci itaque maxime ex eius atque esse praesentium porro!
          Ratione maxime sed, quidem alias consequuntur dicta assumenda
          accusamus consectetur error!
        </PostText>
      </WrapInfo>
    </WrapPost>
  );
}
