import React, { useState } from 'react';

import { BtnSave, WrapEditPost } from './Posts.styled';

export default function EditPost({ data, onUpdatePost }) {
  const id = data._id;
  const fields = {
    imageUrl: data.imageUrl,
    tag: data.tag,
    title: data.title,
    text: data.text,
  };

  const [post, setPost] = useState(fields);

  const onChangeField = (field, value) => {
    setPost(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleUpdate = () => {
    onUpdatePost(id, post);
    // console.log('handleUpdate', post);
  };

  return (
    <div>
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
        <BtnSave type="button" onClick={handleUpdate}>
          update post
        </BtnSave>
      </WrapEditPost>
    </div>
  );
}
