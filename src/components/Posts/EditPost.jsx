import React, { useState } from 'react';
import { WrapBtn, WrapEditPost } from './Posts.styled';
import { useUpdatePostMutation } from '../../redux/PostsSlice';
import NotifPositive from 'components/Helper/NotifPositive';
import NotifNegative from 'components/Helper/NotifNegative';

export default function EditPost({ data }) {
  const id = data._id;
  const fields = {
    imageUrl: data.imageUrl,
    tag: data.tag,
    title: data.title,
    text: data.text,
  };

  const [isShow, setIsShow] = useState(false);
  const [post, setPost] = useState(fields);
  const [updatePost, { isError, isSuccess }] = useUpdatePostMutation();

  const onChangeField = (field, value) => {
    setPost(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleUpdate = () => {
    // onUpdatePost(id, post);
    // console.log('handleUpdate', post);
    updatePost({ id, post });
    setIsShow(true);
  };

  const onReset = () => {
    setPost({
      imageUrl: '',
      tag: '',
      title: '',
      text: '',
    });
  };

  const showSuccess = isShow && isSuccess;
  const showError = isShow && isError;
  // console.log(showSuccess);
  // console.log(showError);

  return (
    <WrapEditPost autoComplete="off">
      <input
        className="input"
        name="imageUrl"
        type="text"
        value={post.imageUrl}
        onChange={e => onChangeField('imageUrl', e.target.value)}
      />
      <div className="wrap-radio">
        <label htmlFor="tags" className="label">
          <input
            type="radio"
            name="tag"
            value="animals"
            onChange={e => onChangeField('tag', e.target.value)}
          />
          animals
        </label>
        <label htmlFor="tags" className="label">
          <input
            type="radio"
            name="tag"
            value="hobby"
            onChange={e => onChangeField('tag', e.target.value)}
          />
          hobby
        </label>
        <label htmlFor="tags" className="label">
          <input
            type="radio"
            name="tag"
            value="children"
            onChange={e => onChangeField('tag', e.target.value)}
          />
          children
        </label>
        <label htmlFor="tags" className="label">
          <input
            type="radio"
            name="tag"
            value="health"
            onChange={e => onChangeField('tag', e.target.value)}
          />
          health
        </label>
      </div>
      <input
        className="input"
        name="title"
        type="text"
        value={post.title}
        onChange={e => onChangeField('title', e.target.value)}
      />
      <textarea
        name="text"
        rows="auto"
        type="textarea"
        className="textarea"
        value={post.text}
        onChange={e => onChangeField('text', e.target.value)}
      />
      <WrapBtn>
        <button type="submit" className="btn" onClick={onReset}>
          reset
        </button>
        <button type="button" className="btn" onClick={handleUpdate}>
          update post
        </button>
      </WrapBtn>
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
    </WrapEditPost>
  );
}
