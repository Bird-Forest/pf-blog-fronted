import styled from 'styled-components';
import { base } from 'baseTheme';

// ******** PROFILE ********
export const WrapProfile = styled.div`
  display: grid;
  grid-template-columns: minmax(272px, 420px);
  grid-template-rows: auto auto;
  gap: 40px;
  border: 2px solid ${base.colors.green300};
  border-radius: 14px;
  background-color: ${base.colors.green50};
  padding: 20px;
  margin: 20px auto;
`;

// ******** UPLOAD AVATAR ********
export const WrapUpload = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 40px;
  gap: 16px;
`;
export const UploadImg = styled.div`
  display: grid;
  grid-template-columns: 1px 80px 160px;
  grid-template-rows: 80px;
  justify-content: start;
  align-items: center;
  gap: 16px;
  .avatar-img {
    display: flex;
    width: 80px;
    height: 80px;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    border: 1px solid ${base.colors.green900};
  }
  .input-hidden {
    opacity: 0;
    width: 0;
    height: 0;
    line-height: 0;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }
  .btn-choose {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 40px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    /* color: ${base.colors.green900}; */
    color: #ffffff;
    border-radius: 20px;
    background-color: ${base.colors.green200};
    border: none;
    padding: 0;
    cursor: pointer;
    &:hover,
    :focus {
      background-color: ${base.colors.green400};
    }
  }
`;
export const BtnUdate = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background-color: ${base.colors.green500};
  transition: all 0.3s;
  border: none;
  border-radius: 20px;
  text-decoration: none;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: ${base.colors.green700};
  }
`;
// ******** UPDATE NAME ********
export const WrapUpdateName = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  .form-up {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px 40px;
  }
`;
