import React from 'react';
import {
  BsFillBookmarkFill,
  BsCircleFill,
  BsHandThumbsUpFill,
  BsChatRightTextFill,
  BsSendFill,
  BsThreeDotsVertical,
} from 'react-icons/bs';

import {
  BtnIcons,
  CountLike,
  ForComment,
  PostText,
  UserName,
  WrapAvatar,
  WrapComment,
  WrapImgPost,
  WrapInfo,
  WrapMain,
  WrapPost,
  WrapReviews,
  WrapTag,
  WrapTitle,
  WrapUser,
  WrapUserPost,
} from './Posts.styled';

export default function Post({ post }) {
  return (
    <WrapUserPost>
      <WrapUser>
        <div className="bgr">
          <WrapAvatar>R</WrapAvatar>
          <UserName>Tom Fisher</UserName>
          <BtnIcons type="button">
            <BsHandThumbsUpFill className="icon like" />
          </BtnIcons>
          <CountLike>{123}</CountLike>
        </div>
      </WrapUser>
      <WrapPost>
        <WrapMain>
          <WrapImgPost>
            <img src={post.imageUrl} alt={post.title} className="img-post" />
          </WrapImgPost>
          <WrapInfo>
            <WrapTag>
              <BsFillBookmarkFill className="icon-tag" />
              <h4 className="post-tag">{post.tag}</h4>
            </WrapTag>
            <WrapTitle>
              <BsCircleFill className="icon-title" />
              <h3 className="post-title">{post.title}</h3>
            </WrapTitle>
          </WrapInfo>
        </WrapMain>
        <PostText>{post.text}</PostText>
        <WrapReviews>
          <BtnIcons>
            <BsChatRightTextFill className="icon coment" />
          </BtnIcons>
          <WrapComment>
            <ForComment />
            <BtnIcons>
              <BsSendFill className="icon send" />
            </BtnIcons>
          </WrapComment>
          <BtnIcons>
            <BsThreeDotsVertical className="icon dots" />
          </BtnIcons>
        </WrapReviews>
      </WrapPost>
    </WrapUserPost>
  );
}
