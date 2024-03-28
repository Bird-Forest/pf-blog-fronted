import React from 'react';
import {
  BsFillBookmarkFill,
  BsCircleFill,
  BsHandThumbsUpFill,
  BsFillChatLeftTextFill,
  BsSendFill,
  BsThreeDotsVertical,
} from 'react-icons/bs';
import {
  BtnIcons,
  CountLike,
  ForComment,
  PostText,
  WrapComment,
  WrapImgPost,
  WrapInfo,
  WrapLikes,
  WrapMain,
  WrapPost,
  WrapReviews,
  WrapTag,
  WrapTitle,
} from './Posts.styled';
// import { ThemeProvider } from 'styled-components';

export default function Post({ post }) {
  return (
    // <ThemeProvider theme={theme}>
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
      {/* <WrapText> */}

      {/* </WrapText> */}
      <WrapReviews>
        <WrapLikes>
          <BtnIcons type="button">
            <BsHandThumbsUpFill className="icon like" />
          </BtnIcons>
          <CountLike>{0}</CountLike>
          <BtnIcons>
            <BsFillChatLeftTextFill className="icon coment" />
          </BtnIcons>
        </WrapLikes>
        <WrapComment>
          <ForComment />
          <BtnIcons>
            <BsSendFill className="icon send" />
          </BtnIcons>
          <BtnIcons>
            <BsThreeDotsVertical className="icon dots" />
          </BtnIcons>
        </WrapComment>
      </WrapReviews>
    </WrapPost>
    // </ThemeProvider>
  );
}

//  <WrapPost>
//    <WrapImgPost>
//      <img
//        src="https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_640.jpg"
//        alt="cat"
//        className="img-post"
//      />
//    </WrapImgPost>
//    <WrapInfo>
//      <WrapTag>
//        <BsFillBookmarkFill className="icon-tag" />
//        <h4 className="post-tag">animal</h4>
//      </WrapTag>
//      <WrapTitle>
//        <BsCircleFill className="icon-title" />
//        <h3 className="post-title">My pet</h3>
//      </WrapTitle>
//      <PostText>
//        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita fugiat
//        adipisci itaque maxime ex eius atque esse praesentium porro! Ratione
//        maxime sed, quidem alias consequuntur dicta assumenda accusamus
//        consectetur error! Lorem ipsum dolor sit amet consectetur, adipisicing
//        elit. Expedita fugiat adipisci itaque maxime ex eius atque esse
//        praesentium porro! Ratione maxime sed, quidem alias consequuntur dicta
//        assumenda accusamus consectetur error!
//      </PostText>
//    </WrapInfo>
//    <WrapReviews>
//      <button type="button" className="btn-like">
//        <BsHandThumbsUpFill className="icon-like" />
//      </button>
//      <span className="counter">{0}</span>
//      <button className="btn-comment">Comment</button>
//    </WrapReviews>
//  </WrapPost>;
