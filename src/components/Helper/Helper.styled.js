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
  /* background-color: rgba(46, 47, 66, 0.4); */
  backdrop-filter: blur(2px);
  background-color: rgba(189, 189, 189, 0.5);
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
export const WrapModal = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  border-radius: 24px;
  background-color: #ffffff;
  padding: 8px;
  margin: 0;
`;

// *******   NOTIFICATION  *******
export const WrapNotif = styled.div`
  display: grid;
  grid-template-columns: 60px 200px;
  grid-template-rows: 60px;
  gap: 8px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  padding: 8px;
  margin: 0 auto;
  .wrap-notif {
    display: grid;
    grid-template-columns: 200px;
    grid-template-rows: 26px 26px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .title-notif {
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: clamp(20px, 1.159rem + 0.45vw, 24px);
    font-weight: 600;
    color: ${base.colors.green900};
    padding: 12px 4px 2px 4px;
  }
  .icon-notif {
    width: 60px;
    height: 60px;
  }
  .green {
    fill: ${base.colors.green600};
  }
  .yellow {
    fill: ${base.colors.like};
  }
  .text-notif {
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: clamp(14px, 0.83rem + 0.23vw, 16px);
    font-weight: 500;
    color: ${base.colors.green900};
    padding: 2px 4px 12px 4px;
  }
`;
