import React, { useRef, useState } from 'react';
import { WrapUpload } from './User.styled';

export default function Profile() {
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
  return (
    <div>
      {' '}
      <WrapUpload>
        <input
          accept="image/*, .png, .jpg, .web,"
          type="file"
          ref={filePicker}
          onChange={handleChange}
          className="input-hidden"
        />
        <button onClick={handlePick} className="btn-choose">
          file upload
        </button>
        <button onClick={handleUpload}>Upload</button>
      </WrapUpload>
    </div>
  );
}
