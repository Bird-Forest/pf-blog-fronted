import { base } from 'baseTheme';
import styled from 'styled-components';

// *******   CREATE  POST *******

export const WrapCreate = styled.div`
  display: grid;
  grid-template-columns: minmax(292px, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 8px;
  padding: 8px 4px;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    padding: 8px;
  }
`;

export const FormPost = styled.form`
  display: grid;
  grid-template-columns: minmax(292px, 1fr);
  grid-template-rows: 40px 40px 40px 1fr 88px;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid ${base.colors.green300};
  border-radius: 14px;
  gap: 16px;
  background-color: ${base.colors.green50};
  padding: 8px;
  margin: 0 auto;
  .wrap-radio {
    display: grid;
    grid-template-columns: repeat(auto-fit, 84px);
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
  }
  .input {
    display: grid;
    grid-template-columns: 1fr;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    border-radius: 8px;
    border: 1px solid ${base.colors.green300};
    outline: ${base.colors.green300};
    color: ${base.colors.green900};
    justify-self: stretch;
    align-self: stretch;
    padding: 4px 8px;
  }
  .input::placeholder {
    font-size: 16px;
    color: ${base.colors.green300};
  }
  .label {
    display: grid;
    grid-template-columns: 12px 1fr;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    font-size: 16px;
    font-weight: 500;
    color: ${base.colors.green900};
  }
  .textarea {
    display: grid;
    grid-template-columns: minmax(256px 460px);
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    color: ${base.colors.green900};
    border-radius: 8px;
    border: 1px solid ${base.colors.green300};
    outline: ${base.colors.green300};
    resize: vertical;
    padding: 4px 8px;
  }
  .textarea::placeholder {
    font-size: 16px;
    color: ${base.colors.green300};
  }
  @media screen and (min-width: 480px) {
    grid-template-columns: 460px;
    grid-template-rows: 40px 40px 40px 1fr 40px;
  }
`;
export const WrapBtn = styled.div`
  display: grid;
  grid-template-columns: minmax(292px, 1fr);
  grid-template-rows: 40px 40px;
  gap: 8px;
  .btn {
    box-sizing: border-box;
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
    cursor: pointer;
    &:hover,
    :focus {
      background-color: ${base.colors.green700};
    }
  }
  @media screen and (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40px;
  }
`;

// *******   POST LIST *******

export const WrapPostsList = styled.ul`
  display: grid;
  gap: 8px;
  grid-template-columns: minmax(312px, 1fr);
  padding: 8px 4px;
  margin: 0 auto;
  @media screen and (min-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 8px;
    grid-template-rows: auto;
  }
`;

// *******   POST *******
export const WrapUserPost = styled.li`
  display: grid;
  grid-template-columns: minmax(292px, auto);
  grid-template-rows: auto auto;
  gap: 8px;
  padding: 0;
  margin: 0;
`;
export const WrapUser = styled.div`
  display: grid;
  grid-template-columns: 272px auto;
  .bgr {
    display: grid;
    grid-template-columns: 36px 124px 40px 56px;
    grid-template-rows: 36px;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    border: none;
    border-radius: 30px;
    background-color: #ffffff;
    padding: 2px;
    margin: 0;
  }
`;
export const WrapAvatar = styled.div`
  display: grid;
  grid-template-rows: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: yellow;
`;
export const UserName = styled.p`
  display: grid;
  justify-content: flex-start;
  align-items: center;
  font-size: clamp(12px, 0.614rem + 0.68vw, 18px);
  font-weight: 600;
  color: ${base.colors.green900};
  padding: 4px;
`;
export const CountLike = styled.span`
  display: grid;
  justify-content: flex-start;
  align-items: center;
  font-size: clamp(12px, 0.659rem + 0.45vw, 16px);
  color: ${base.colors.green900};
  margin: 0;
  padding: 4px;
`;
export const WrapPost = styled.div`
  display: grid;
  grid-template-columns: minmax(292px, 552px);
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  border-radius: 14px;
  padding: 8px;
  margin: 0 auto;
  background-color: ${base.colors.green50};
  @media screen and (min-width: 480px) {
    grid-template-rows: 160px 100px 40px;
  }
`;

export const WrapMain = styled.div`
  display: grid;
  padding: 0;
  margin: 0;
  @media screen and (min-width: 480px) {
    grid-template-columns: 240px 1fr;
    grid-template-rows: 160px;
    gap: 8px;
  }
`;
export const WrapImgPost = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 400px);
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  .img-post {
    border-radius: 12px;
    justify-self: stretch;
    align-self: stretch;
  }
  @media screen and (min-width: 480px) {
    grid-template-columns: 240px;
    grid-template-rows: 160px;
  }
`;
export const WrapInfo = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr;
  grid-template-rows: 20px 1fr;
  align-items: flex-start;
  padding: 8px;
`;
export const WrapTag = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  justify-content: flex-start;
  align-items: center;
  column-gap: 8px;
  padding: 0;
  .icon-tag {
    width: 16px;
    height: 16px;
    fill: ${base.colors.comment};
  }
  .post-tag {
    box-sizing: border-box;
    font-size: clamp(12px, 0.614rem + 0.68vw, 18px);
    font-weight: 700;
    color: ${base.colors.comment};
  }
`;
export const WrapTitle = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  padding: 0;
  .icon-title {
    width: 16px;
    height: 16px;
    fill: ${base.colors.green900};
  }
  .post-title {
    box-sizing: border-box;
    font-size: clamp(16px, 0.909rem + 0.45vw, 20px);
    font-weight: 500;
    color: ${base.colors.green900};
    word-wrap: break-word;
    overflow-wrap: anywhere;
  }
`;
export const PostText = styled.p`
  display: grid;
  grid-template-rows: 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 4px;
  margin: 0;
  font-size: clamp(12px, 0.659rem + 0.45vw, 16px);
  color: ${base.colors.green900};
  overflow-y: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 8px;
    height: 50px;
  }
  /* &::-webkit-scrollbar-track {
    background: #f6f6f6;
  } */
  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: #c8e6c9;
  }
  /* &::-webkit-scrollbar-thumb:hover {
    background: #249fa3;
  } */
  @media screen and (min-width: 480px) {
    grid-template-rows: 80px;
  }
`;
export const WrapReviews = styled.div`
  display: grid;
  grid-template-columns: 36px 1fr 36px;
  grid-template-rows: 36px;
  gap: 4px;
  justify-content: flex-start;
  align-items: center;
  padding: 2px;
`;

export const WrapComment = styled.div`
  display: grid;
  grid-template-columns: 1fr 36px;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`;
export const ForComment = styled.input`
  display: grid;
  grid-template-columns: minmax(200px 1fr);
  border-radius: 8px;
  border: 1px solid white;
  outline: none;
  font-size: 12px;
  padding: 8px 4px;
`;
export const BtnIcons = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;
  .icon {
    width: 24px;
    height: 24px;
  }
  .like {
    fill: ${base.colors.like};
  }
  .coment {
    fill: ${base.colors.comment};
  }
  .send {
    fill: ${base.colors.comment};
  }
  .dots {
    fill: ${base.colors.green900};
  }
`;

// *******   EDIT PAGE *******
export const WrapEditList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(312px, 1fr));
  gap: 8px;
  padding: 8px 4px;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    padding: 8px;
  }
`;
export const WrapItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 8px;
  padding: 0;
  margin: 0;
`;
export const WrapBtnEdit = styled.div`
  display: grid;
  grid-template-columns: minmax(292px, 1fr);
  grid-template-rows: 40px 40px;
  gap: 8px;
  .btn {
    box-sizing: border-box;
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
    cursor: pointer;
    &:hover,
    :focus {
      background-color: ${base.colors.green700};
    }
  }
  @media screen and (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40px;
  }
`;

export const WrapEditPost = styled.div`
  display: grid;
  grid-template-columns: minmax(292px, 1fr);
  grid-template-rows: 40px 40px 40px auto 40px;
  justify-content: flex-start;
  align-items: center;
  /* border: 2px solid ${base.colors.green300}; */
  border-radius: 14px;
  gap: 16px;
  background-color: ${base.colors.green50};
  padding: 8px;
  margin: 0 auto;
  .wrap-radio {
    display: grid;
    grid-template-columns: repeat(auto-fit, 84px);
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
  }
  .input {
    display: grid;
    grid-template-columns: 1fr;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    border-radius: 8px;
    border: 1px solid ${base.colors.green300};
    outline: ${base.colors.green300};
    color: ${base.colors.green900};
    justify-self: stretch;
    align-self: stretch;
    padding: 4px 8px;
  }
  .input::placeholder {
    font-size: 16px;
    color: ${base.colors.green300};
  }
  .label {
    display: grid;
    grid-template-columns: 12px 1fr;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    font-size: 16px;
    font-weight: 500;
    color: ${base.colors.green900};
  }
  .textarea {
    display: grid;
    grid-template-columns: minmax(256px 460px);
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    color: ${base.colors.green900};
    border-radius: 8px;
    border: 1px solid ${base.colors.green300};
    outline: ${base.colors.green300};
    resize: vertical;
    padding: 4px 8px;
  }
  .textarea::placeholder {
    font-size: 16px;
    color: ${base.colors.green300};
  }
  @media screen and (min-width: 480px) {
    grid-template-columns: 460px;
    grid-template-rows: 40px 40px 40px 1fr 40px;
  }
`;
export const BtnSave = styled.button`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background-color: ${base.colors.green500};
  transition: all 0.3s;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: ${base.colors.green700};
  }
`;
