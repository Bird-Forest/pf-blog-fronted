import React, { useState } from 'react';
import {
  BtnIcons,
  CountLike,
  PanelAvatar,
  PanelName,
  WrapPanel,
} from './Posts.styled';
import { BsHandThumbsUpFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { updateLikes } from '../../redux/servise';
// import { GiSpy } from 'react-icons/gi';

export default function UserPanel({ post }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();
  const user = post.owner;
  console.log(user);

  const onAddLike = evt => {
    const id = evt.currentTarge.name;
    console.log(id);
    const like = Number(user.likes + 1);
    let count = { likes: like };

    dispatch(updateLikes(count));
    setIsDisabled(true);
  };
  // const avatar = user.avatar || '';
  // const name = user.name || 'Guest';

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
        <CountLike>{user.likes}</CountLike>
      </div>
    </WrapPanel>
  );
}
