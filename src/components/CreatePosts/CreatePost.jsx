// import { Field, Form, Formik, ErrorMessage } from 'formik';
import React, { useRef, useState } from 'react';

import { WrapCreate } from './posts.styled';
import Post from 'components/Post';
// import * as Yup from 'yup';
// import CreateError from './CreateError';

const tagsList = ['animals', 'recipes', 'children', 'health'];
// const tag = tagsList[idx];
console.log(tagsList);
const post = {
  img: '',
  tag: '',
  title: '',
  text: ',',
};
console.log(post);

export default function CreatePost() {
  const filePicker = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleChange = evt => {
    // console.log(evt.target.files[0]);
    setSelectedFile(evt.target.files[0]);
  };
  const handleUpload = () => {
    if (!selectedFile) {
      alert('select a file');
      return;
    }
    const formData = new FormData();
    const file = selectedFile;
    formData.append('file', file);
    // console.log(formData);
    //  dispatch(updateAvatar(formData));
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const title = evt.target.title.value;
    console.log(title);
    const textarea = evt.target.textarea.value;
    console.log(textarea);
  };
  return (
    <WrapCreate>
      <input
        accept="image/*, .png, .jpg, .web,"
        type="file"
        ref={filePicker}
        onChange={handleChange}
        className="input-hidden"
        // multiple
      />
      <button onClick={handlePick} className="btn-choose">
        file upload
      </button>
      <button onClick={handleUpload}>Upload</button>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          className="input-tag"
          // id="brand"
          name="tags"
          value={'animals' || 'Choose a tag'}
          readOnly={tagsList}
        />

        <input className="input-title" name="title" type="text" />

        {/* {tagsList.map((tag, idx) => (
          <option value={tag} key={idx} className="my-option">
            {tag}
          </option>
        ))} */}

        <input label="" name="textarea" rows="auto" type="textarea" />
      </form>

      <button type="submit">Subbmit</button>
      <Post />
    </WrapCreate>
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
