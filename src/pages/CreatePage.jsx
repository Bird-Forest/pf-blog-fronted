import React, { useState } from 'react';
import { WrapRender } from './Page.styled';
import CreatePost from 'components/Posts/CreatePost';
import Post from '../components/Posts/Post';
import { useAddPostMutation } from '../redux/PostsSlice';
import { createPortal } from 'react-dom';
import ModalWindow from '../components/Helper/ModalWindow';

export default function CreatePage() {
  const [addPost] = useAddPostMutation();
  const [showModal, setShowModal] = useState(false);
  const [post, setPost] = useState({
    imageUrl: '',
    tag: '',
    title: '',
    text: '',
  });
  const onPreview = evt => {
    evt.preventDefault();
    const newUrl = evt.target.url.value;
    const newTitle = evt.target.title.value;
    const newTag = evt.target.tags.value;
    const newText = evt.target.textarea.value;

    setPost({
      imageUrl: newUrl,
      tag: newTag,
      title: newTitle,
      text: newText,
    });
    setShowModal(true);
  };

  const onPublish = () => {
    addPost(post);
  };

  return (
    <WrapRender>
      <CreatePost onPublish={onPublish} onPreview={onPreview} />
      {showModal &&
        createPortal(
          <ModalWindow
            onClose={() => setShowModal(false)}
            content={<Post post={post} />}
          />,
          document.body
        )}
    </WrapRender>
  );
}
