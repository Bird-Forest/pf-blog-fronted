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
  const date = new Date(post.createdAt);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
    .format(date)
    .replace(/\//g, '.');

  // console.log(formattedDate);

  const onChangeLikes = evt => {
    const id = evt.currentTarget.name;
    console.log(id);
    let count = post.viewsCount + 1;
    console.log(count);
  };

  return (
    <WrapUserPost>
      <WrapUser>
        <div className="bgr">
          <WrapAvatar>R</WrapAvatar>
          <UserName>Tom Fisher</UserName>
          <BtnIcons name={post._id} type="button" onClick={onChangeLikes}>
            <BsHandThumbsUpFill className="icon like" />
          </BtnIcons>
          <CountLike>{post.viewsCount}</CountLike>
        </div>
      </WrapUser>
      <WrapPost>
        <WrapMain>
          <WrapImgPost>
            <img src={post.imageUrl} alt={post.title} className="img-post" />
          </WrapImgPost>
          <WrapInfo>
            <WrapTag>
              <div className="tags">
                <BsFillBookmarkFill className="icon-tag" />
                <h4 className="post-tag">{post.tag}</h4>
              </div>
              <p className="date">{formattedDate}</p>
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
