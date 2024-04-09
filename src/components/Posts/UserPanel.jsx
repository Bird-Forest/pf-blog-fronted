import React, { useState } from 'react';
import {
  BtnIcons,
  CountLike,
  PanelAvatar,
  PanelName,
  WrapPanel,
} from './Posts.styled';
import { BsHandThumbsUpFill } from 'react-icons/bs';
import { useUpdateLikesMutation } from '../../redux/PostsSlice';

export default function UserPanel({ post }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [updateLikes] = useUpdateLikesMutation();
  const id = post._id;

  const onAddLike = () => {
    const like = Number(post.viewsCount + 1);
    let count = { viewsCount: like };

    updateLikes({ id, count });
    setIsDisabled(true);
  };
  return (
    <WrapPanel>
      <div className="bgr">
        <PanelAvatar>R</PanelAvatar>
        <PanelName>Tom Fisher</PanelName>
        <BtnIcons type="button" onClick={onAddLike} disabled={isDisabled}>
          <BsHandThumbsUpFill className="icon like" />
        </BtnIcons>
        <CountLike>{post.viewsCount}</CountLike>
      </div>
    </WrapPanel>
  );
}
