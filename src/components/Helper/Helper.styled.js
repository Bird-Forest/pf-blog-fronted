import styled from 'styled-components';
import { base } from 'baseTheme';

// *******   LOADING *******
export const WrapLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(46, 47, 66, 0.4);
`;
// *******   EMPTY PAGE *******
export const WrapEmpty = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 40px;
  .empty-title {
    font-size: clamp(1rem, 0.636rem + 1.82vw, 2rem);
    color: ${base.colors.green900};
    font-weight: 500;
  }
  .icon-empty {
    width: 240px;
    height: 320px;
    fill: ${base.colors.green500};
  }
`;
// *******   MODAL WINDOW  *******
export const WrapOverlayModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
  background: rgba(189, 189, 189, 0.5);
  /* background-color: rgba(46, 47, 66, 0.4); */
`;
export const WrapModal = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  border-radius: 24px;
  background-color: #ffffff;
  padding: 8px;
  margin: 0;
`;
// export const BtnClose = styled.button`
//   top: 20px;
//   right: 20px;
//   position: absolute;
//   width: 20px;
//   height: 20px;
//   border: none;
//   background-color: #ffffff;
//   transition: all 0.3s;
//   cursor: pointer;
//   padding: 0;
//   .close {
//     width: 20px;
//     height: 20px;
//     fill: #424242;
//   }
// `;
