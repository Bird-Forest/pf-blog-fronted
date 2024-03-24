import { useState } from 'react';
import { FormPost, WrapCreate } from './Posts.styled';
import Post from './Post';

const tagsList = ['animals', 'recipes', 'children', 'health'];
// const tag = tagsList[idx];
console.log(tagsList);
// const post = {
//   img: '',
//   tag: '',
//   title: '',
//   text: ',',
// };
// console.log(post);

export default function CreatePost() {
  const [post, setPost] = useState({
    img: '',
    tag: '',
    title: '',
    text: ',',
  });
  const handleSubmit = evt => {
    evt.preventDefault();
    const newUrl = evt.target.url.value;
    console.log(newUrl);
    const newTitle = evt.target.title.value;
    console.log(newTitle);
    const newTag = evt.target.tags.value;
    console.log(newTag);
    const newText = evt.target.textarea.value;
    console.log(newText);
    setPost({ img: newUrl, tag: newTag, title: newTitle, text: newText });
  };
  console.log(post);
  return (
    <>
      <WrapCreate>
        <FormPost autoComplete="off" onSubmit={handleSubmit}>
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
            className="input"
          />
          <button type="submit">Subbmit</button>
        </FormPost>
      </WrapCreate>
      <Post post={post} />
    </>
  );
}

// export default function CreatePost() {
//   const handleSubmit = evt => {
//     evt.preventDefault();

//     const title = evt.target.title.value;
//     console.log(title);
//     const textarea = evt.target.textarea.value;
//     console.log(textarea);
//   };
//   return (
//     <WrapCreate>
//       <WrapPost>
//         <WrapImgPost>
//           <img
//             src="https://pixabay.com/get/g02a97f31e2b2dd2a1c5c8ead70592368a620fcecf86153cd167614bacc98e98b575bc6711e775dbbf84da9438f608838_640.jpg"
//             alt="cat"
//             className="img-post"
//           />
//         </WrapImgPost>
//         <WrapForm autoComplete="off" onSubmit={handleSubmit}>
//           <WrapTag>
//             <BsFillBookmarkFill className="icon-tag" />
//             <input
//               className="input-tag"
//               // id="brand"
//               name="tags"
//               value={'animals' || 'Choose a tag'}
//               readOnly={tagsList}
//             />
//           </WrapTag>
//           <WrapTitle>
//             <BsCircleFill className="icon-title" />
//             <input className="input-title" name="title" type="text" />
//           </WrapTitle>

//           {/* {tagsList.map((tag, idx) => (
//           <option value={tag} key={idx} className="my-option">
//             {tag}
//           </option>
//         ))} */}

//           <InputText label="" name="textarea" rows="auto" type="textarea" />
//         </WrapForm>
//       </WrapPost>
//       <button type="submit">Subbmit</button>
//     </WrapCreate>
//   );
// }
