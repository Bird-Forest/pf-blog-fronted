import React from 'react';
import { FormPost, WrapBtn, WrapCreate } from './Posts.styled';
// const tagsList = ['animals', 'hobby', 'children', 'health'];

export default function CreatePost({ onPublish, onPreview }) {
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
            <input id="" type="radio" name="tags" value="animals" />
            animals
          </label>
          <label htmlFor="tags" className="label">
            <input type="radio" name="tags" value="recipes" />
            recipes
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
          label=""
          name="textarea"
          rows="auto"
          type="textarea"
          className="textarea"
        />
        <WrapBtn>
          <button type="submit">preview</button>
          <button type="button" onClick={onPublish}>
            publish
          </button>
        </WrapBtn>
      </FormPost>
    </WrapCreate>
  );
}
