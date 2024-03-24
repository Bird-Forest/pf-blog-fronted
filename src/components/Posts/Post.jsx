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
        <img src={post.img} alt={post.title} className="img-post" />
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
//        src="https://pixabay.com/get/gf6364abc5dd3dbc246ac1b6da0a114d2986ac4a94f6752b748a0b8ce34b6b973d4d6032210375fbdee617d2afdcadc85_640.jpg"
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
