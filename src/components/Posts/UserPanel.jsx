import React, { useState } from 'react';
import {
  BtnIcons,
  CountLike,
  PanelAvatar,
  PanelName,
  WrapPanel,
} from './Posts.styled';
import { BsHandThumbsUpFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { updateLikes } from '../../redux/servise';
import { selectUser } from '../../redux/selectors';

export default function UserPanel({ post }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();
  const user = post.owner;
  const userState = useSelector(selectUser);
  const likes = userState.likes;

  const onAddLike = evt => {
    const id = evt.currentTarget.name;
    console.log(id);
    const like = Number(user.likes + 1);
    console.log(like);
    let likes = { likes: like };

    dispatch(updateLikes({ id, likes }));
    setIsDisabled(true);
  };

  return (
    <WrapPanel>
      <div className="bgr">
        <PanelAvatar>
          <img src={user.avatar} alt="avatar" className="img-avatar" />
        </PanelAvatar>
        <PanelName>{user.name}</PanelName>
        <BtnIcons
          name={user._id}
          type="button"
          onClick={onAddLike}
          disabled={isDisabled}
        >
          <BsHandThumbsUpFill className="icon like" />
        </BtnIcons>
        <CountLike>{likes}</CountLike>
      </div>
    </WrapPanel>
  );
}
