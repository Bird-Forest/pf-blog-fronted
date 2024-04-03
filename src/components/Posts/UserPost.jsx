import React, { useRef, useState } from 'react';
import { BackLink, WrapBtn, WrapItem, WrapPostId } from './Posts.styled';
import Post from './Post';
import {
  useDeletePostMutation,
  useGetPostByIdQuery,
  useUpdatePostMutation,
} from '../../redux/PostsSlice';
import { useLocation, useParams } from 'react-router-dom';
import EditPost from './EditPost';
import ModalWindow from 'components/Helper/ModalWindow';
import { createPortal } from 'react-dom';
import Loading from 'components/Helper/Loading';
import { WrapRender } from 'pages/Page.styled';

export default function UserPost() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const backHref = useRef(location.state?.from ?? '/user-posts');
  const params = useParams();
  const id = params.id;
  // console.log(id);
  const { data, error, isLoading } = useGetPostByIdQuery(id);
  const post = data;
  // console.log(post);

  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const onEdit = evt => {
    //  const id = evt.target.name;
    //  setId(id);
    setShowModal(true);
  };

  const onUpdatePost = () => {
    // console.log('POST', post);
    // console.log('ID', id);
    updatePost({ id, post });
  };

  const onDelete = () => {
    deletePost(id);
  };

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
                    content={
                      <EditPost data={data} onUpdatePost={onUpdatePost} />
                    }
                  />,
                  document.body
                )}
              <button type="button" onClick={onDelete} className="btn">
                delete
              </button>
            </WrapBtn>
          </WrapItem>
        )}
        {error && <p>The item was successfully deleted</p>}
        <BackLink to={backHref.current}>come back</BackLink>
      </WrapPostId>
    </WrapRender>
  );
}
