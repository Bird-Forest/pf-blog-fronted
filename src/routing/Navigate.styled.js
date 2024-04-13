import styled from 'styled-components';
import { base } from 'baseTheme';

export const WrapNav = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 36px 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0;
  .navigate {
    font-size: clamp(16px, 0.909rem + 0.45vw, 20px);
    font-weight: 600;
    color: ${base.colors.green900};
    text-decoration: none;
    transition: all 0.3s;
    &.active {
      color: #ffffff;
    }
  }
`;
export const ImgAvatar = styled.div`
  display: grid;
  grid-template-columns: 36px;
  grid-template-rows: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0;
  background-color: ${base.colors.green50};
  .img-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }
  .icon-avatar {
    width: 32px;
    height: 32px;
    fill: ${base.colors.green900};
  }
`;
export const NameUser = styled.button`
  position: relative;
  display: grid;
  grid-template-rows: 24px;
  justify-content: center;
  align-items: center;
  border: none;
  outline: ${base.colors.green50};
  background-color: ${base.colors.green50};
  color: ${base.colors.green900};
  border-radius: 14px;
  /* width: 60px;
  height: 40px; */
  padding: 2px 4px;
  cursor: pointer;
`;

export const WrapNavUser = styled.nav`
  position: absolute;
  top: 52px;
  left: 56%;
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: 24px 24px;
  justify-content: start;
  align-items: center;
  gap: 8px;
  background-color: #ffffff;
  color: ${base.colors.green900};
  border-radius: 14px;
  border: 4px solid ${base.colors.green100};
  padding: 12px;
  .navigate {
    display: grid;
    font-size: clamp(16px, 0.909rem + 0.45vw, 20px);
    font-weight: 600;
    color: ${base.colors.green900};
    text-decoration: none;
    transition: all 0.3s;
  }
`;
