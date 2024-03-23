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
          src="https://pixabay.com/get/gf6364abc5dd3dbc246ac1b6da0a114d2986ac4a94f6752b748a0b8ce34b6b973d4d6032210375fbdee617d2afdcadc85_640.jpg"
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
