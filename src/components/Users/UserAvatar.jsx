import React, { useRef, useState } from 'react';
import { BtnUdate, UploadImg, WrapUpload } from './User.styled';

export default function UserAvatar() {
  const filePicker = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const avatar = 'Avatar';

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
    <WrapUpload>
      <UploadImg>
        <input
          accept="image/*, .png, .jpg, .web,"
          type="file"
          ref={filePicker}
          onChange={handleChange}
          className="input-hidden"
        />
        <img src={avatar} alt="avatar" className="avatar-img" />
        <button onClick={handlePick} className="btn-choose">
          file upload
        </button>
      </UploadImg>
      <BtnUdate type="submit" onClick={handleUpload}>
        update avatar
        {/* {isLoadding ? <Spinner /> : 'save'} */}
      </BtnUdate>
    </WrapUpload>
  );
}
