import React, { useEffect } from 'react';
import { WrapLoading, WrapModal } from './Helper.styled';
// import { IoCloseSharp } from 'react-icons/io5';

export default function ModalWindow({ onClose, content }) {
  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);
  return (
    <WrapLoading onClick={onClose}>
      <WrapModal onClick={e => e.stopPropagation()}>
        {/* <BtnClose onClick={onClose}>
          <IoCloseSharp className="close" />
        </BtnClose> */}
        {content}
      </WrapModal>
    </WrapLoading>
  );
}
