import React from 'react';
import {
  BtnIcons,
  CountLike,
  PanelAvatar,
  PanelName,
  WrapPanel,
} from './Posts.styled';
import { BsHandThumbsUpFill } from 'react-icons/bs';
// import { useGetUserQuery } from '../../redux/UserSlice';

export default function UserPanel() {
  // const [isDisabled, setIsDisabled] = useState(false);

  // const [updateLikes] = useUpdateLikesMutation();
  // const id = user._id;

  // const onAddLike = () => {
  //   const like = Number(user.viewsCount + 1);
  //   let count = { viewsCount: like };

  //   updateLikes({ id, count });
  //   setIsDisabled(true);
  // };
  // const userLS = localStorage.getItem('user');
  // try {
  //   const data = JSON.parse(userLS);
  //   console.log(data);
  //   return data;
  // } catch (error) {
  //   console.log(error.name); // "SyntaxError"
  //   console.log(error.message); // "Unexpected token u in JSON at position 1"
  // }
  return (
    <WrapPanel>
      <div className="bgr">
        <PanelAvatar>R</PanelAvatar>
        <PanelName>Tomas</PanelName>
        {/* <BtnIcons type="button" onClick={onAddLike} disabled={isDisabled}> */}
        <BtnIcons type="button">
          <BsHandThumbsUpFill className="icon like" />
        </BtnIcons>
        <CountLike>0</CountLike>
      </div>
    </WrapPanel>
  );
}
