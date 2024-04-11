import React, { useState } from 'react';
import { FormPost, WrapBtn, WrapCreate } from './Posts.styled';
import { useAddPostMutation } from '../../redux/PostsSlice';
import { Link } from 'react-router-dom';
import NotifPositive from 'components/Helper/NotifPositive';
import NotifNegative from 'components/Helper/NotifNegative';

export default function CreatePost() {
  const [isShow, setIsShow] = useState(false);
  const [addPost, { isError, isSuccess }] = useAddPostMutation();

  const showSuccess = isShow && isSuccess;
  const showError = isShow && isError;
  console.log(showSuccess);
  console.log(showError);

  const onPublish = evt => {
    evt.preventDefault();
    const newUrl = evt.target.url.value;
    const newTitle = evt.target.title.value;
    const newTag = evt.target.tags.value;
    const newText = evt.target.text.value;
    const post = {
      imageUrl: newUrl,
      tag: newTag,
      title: newTitle,
      text: newText,
    };
    // console.log(post);
    addPost(post);
    setIsShow(true);
  };

  const userLS = localStorage.getItem('user');
  try {
    const data = JSON.parse(userLS);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.name); // "SyntaxError"
    console.log(error.message); // "Unexpected token u in JSON at position 1"
  }

  return (
    <WrapCreate>
      <FormPost autoComplete="off" onSubmit={onPublish}>
        <input
          className="input"
          name="url"
          type="text"
          placeholder="Enter URL"
          required
        />
        <div className="wrap-radio">
          <label htmlFor="tags" className="label">
            <input type="radio" name="tags" value="animals" required />
            animals
          </label>
          <label htmlFor="tags" className="label">
            <input type="radio" name="tags" value="hobby" required />
            hobby
          </label>
          <label htmlFor="tags" className="label">
            <input type="radio" name="tags" value="children" required />
            children
          </label>
          <label htmlFor="tags" className="label">
            <input type="radio" name="tags" value="health" required />
            health
          </label>
        </div>
        <input
          className="input"
          name="title"
          type="text"
          placeholder="Enter title"
          required
        />
        <textarea
          name="text"
          rows="auto"
          type="textarea"
          className="textarea"
          placeholder="Enter text"
          required
        />
        <WrapBtn>
          <button type="submit" className="btn">
            publish
          </button>
          <Link
            to="/user-posts"
            className="btn"
            style={{ textDecoration: 'none' }}
          >
            go my posts
          </Link>
        </WrapBtn>
      </FormPost>
      {showSuccess && (
        <NotifPositive
          message={'You created a post'}
          onClose={() => setIsShow(false)}
        />
      )}
      {showError && (
        <NotifNegative
          message={'Please, try again later'}
          onClose={() => setIsShow(false)}
        />
      )}
    </WrapCreate>
  );
}
