import React, { useRef, useState } from 'react';
import { BackLink, WrapBtn, WrapItem, WrapPostId } from './Posts.styled';
import Post from './Post';
import {
  useDeletePostMutation,
  useGetPostByIdQuery,
} from '../../redux/PostsSlice';
import { useLocation, useParams } from 'react-router-dom';
import EditPost from './EditPost';
import ModalWindow from 'components/Helper/ModalWindow';
import { createPortal } from 'react-dom';
import Loading from 'components/Helper/Loading';
import { WrapRender } from 'pages/Page.styled';
import NotifPositive from 'components/Helper/NotifPositive';
import NotifNegative from 'components/Helper/NotifNegative';

export default function UserPost() {
  const [showModal, setShowModal] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const location = useLocation();

  const backHref = useRef(location.state?.from ?? '/user-posts');
  const params = useParams();
  const id = params.id;
  // console.log(id);
  const { data, isLoading } = useGetPostByIdQuery(id);
  const post = data;
  // console.log(post);
  const [deletePost, { isError, isSuccess }] = useDeletePostMutation();

  const onEdit = () => {
    setShowModal(true);
  };

  const onDelete = () => {
    deletePost(id);
    setIsShow(true);
  };
  const showSuccess = isShow && isSuccess;
  const showError = isShow && isError;
  // console.log('showSuccess', showSuccess);
  // console.log('showError', showError);

  return (
    <WrapRender>
      <WrapPostId>
        {isLoading ? (
          <Loading />
        ) : (
          <WrapItem>
            <Post post={post} />
            <WrapBtn>
              <button type="button" onClick={onEdit} className="btn">
                edit
              </button>
              {showModal &&
                createPortal(
                  <ModalWindow
                    onClose={() => setShowModal(false)}
                    content={<EditPost data={data} />}
                  />,
                  document.body
                )}
              <button type="button" onClick={onDelete} className="btn">
                delete
              </button>
            </WrapBtn>
          </WrapItem>
        )}
        <BackLink to={backHref.current}>come back</BackLink>
        {showSuccess && (
          <NotifPositive
            message={'List of posts updated'}
            onClose={() => setIsShow(false)}
          />
        )}
        {showError && (
          <NotifNegative
            message={'Please, try again later'}
            onClose={() => setIsShow(false)}
          />
        )}
      </WrapPostId>
    </WrapRender>
  );
}
