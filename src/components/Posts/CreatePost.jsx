import React, { useState } from 'react';
import { FormPost, WrapBtn, WrapCreate } from './Posts.styled';
import { useAddPostMutation } from '../../redux/PostsSlice';
import { createPortal } from 'react-dom';
import ModalWindow from 'components/Helper/ModalWindow';
import Post from './Post';

export default function CreatePost() {
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
    const newText = evt.target.text.value;
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
    <WrapCreate>
      <FormPost autoComplete="off" onSubmit={onPreview}>
        <input
          className="input"
          name="url"
          type="text"
          placeholder="Enter URL"
        />
        <div className="wrap-radio">
          <label htmlFor="tags" className="label">
            <input type="radio" name="tags" value="animals" />
            animals
          </label>
          <label htmlFor="tags" className="label">
            <input type="radio" name="tags" value="hobby" />
            hobby
          </label>
          <label htmlFor="tags" className="label">
            <input type="radio" name="tags" value="children" />
            children
          </label>
          <label htmlFor="tags" className="label">
            <input type="radio" name="tags" value="health" />
            health
          </label>
        </div>
        <input
          className="input"
          name="title"
          type="text"
          placeholder="Enter title"
        />
        <textarea
          name="text"
          rows="auto"
          type="textarea"
          className="textarea"
        />
        <WrapBtn>
          <button type="submit">preview</button>
          {showModal &&
            createPortal(
              <ModalWindow
                onClose={() => setShowModal(false)}
                content={<Post post={post} />}
              />,
              document.body
            )}
          <button type="button" onClick={onPublish}>
            publish
          </button>
        </WrapBtn>
      </FormPost>
    </WrapCreate>
  );
}
