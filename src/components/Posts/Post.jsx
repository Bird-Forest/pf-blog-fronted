import React from 'react';
import {
  BsFillBookmarkFill,
  BsCircleFill,
  BsChatRightTextFill,
  BsSendFill,
  BsThreeDotsVertical,
} from 'react-icons/bs';

import {
  BtnIcons,
  ForComment,
  PostText,
  WrapImgPost,
  WrapInfo,
  WrapMain,
  WrapPost,
  WrapReviews,
  WrapTag,
  WrapTitle,
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
  return (
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
        {/* <WrapComment> */}
        <ForComment />
        <BtnIcons>
          <BsSendFill className="icon send" />
        </BtnIcons>
        {/* </WrapComment> */}
        <BtnIcons>
          <BsThreeDotsVertical className="icon dots" />
        </BtnIcons>
      </WrapReviews>
    </WrapPost>
  );
}
