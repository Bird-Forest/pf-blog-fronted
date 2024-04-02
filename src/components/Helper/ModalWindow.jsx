import React, { useEffect } from 'react';
import { WrapModal, WrapOverlayModal } from './Helper.styled';

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
    <WrapOverlayModal onClick={onClose}>
      <WrapModal onClick={e => e.stopPropagation()}>{content}</WrapModal>
    </WrapOverlayModal>
  );
}
