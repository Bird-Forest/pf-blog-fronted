import React from 'react';
import {
  BsFillBookmarkFill,
  BsCircleFill,
  BsHandThumbsUpFill,
} from 'react-icons/bs';
import {
  PostText,
  WrapImgPost,
  WrapInfo,
  WrapPost,
  WrapReviews,
  WrapTag,
  WrapTitle,
} from './Posts.styled';

export default function Post({ post }) {
  return (
    <WrapPost>
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
        <PostText>{post.text}</PostText>
      </WrapInfo>
      <WrapReviews>
        <button type="button" className="btn-like">
          <BsHandThumbsUpFill className="icon-like" />
        </button>
        <span className="counter">{0}</span>
        <button className="btn-comment">Comment</button>
      </WrapReviews>
    </WrapPost>
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
