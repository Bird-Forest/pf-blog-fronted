import { base } from 'baseTheme';
import styled from 'styled-components';

// *******   CREATE  POST *******
export const WrapCreate = styled.div`
  display: grid;
  grid-template-columns: minmax(292px, 1fr);
  grid-template-rows: 1fr 1fr;
  background-color: blue;
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
  grid-template-rows: 40px 40px 40px auto 88px;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid red;
  border-radius: 14px;
  gap: 16px;
  background-color: ${base.colors.alabaster50};
  padding: 8px;
  margin: 0 auto;
  .input {
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    border-radius: 4px;
    border: 1px solid #bdbdbd;
    justify-self: stretch;
    align-self: stretch;
    padding: 4px 8px;
  }
  .wrap-radio {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    font-size: 16px;
    gap: 8px;
  }
  .textarea {
    display: grid;
    grid-template-columns: minmax(256px 444px);
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    border-radius: 4px;
    border: 1px solid #bdbdbd;
    /* outline-color: #bdbdbd;
    justify-self: stretch;
    align-self: stretch; */
    resize: vertical;
  }
  @media screen and (min-width: 480px) {
    grid-template-columns: 460px;
  }
`;
export const WrapBtn = styled.div`
  display: grid;
  grid-template-columns: minmax(292px, 1fr);
  grid-template-rows: 40px 40px;
  gap: 8px;
  .btn {
    box-sizing: border-box;
    display: grid;
  }
  @media screen and (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40px;
  }
`;

// *******   POST LIST *******
export const WrapPostsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(312px, 1fr));
  gap: 8px;
  padding: 8px 4px;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    padding: 8px;
  }
`;

// *******   POST *******
export const WrapPost = styled.li`
  display: grid;
  grid-template-columns: minmax(292px, 1fr);
  /* grid-template-rows: auto; */
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  border-radius: 14px;
  /* border: 2px solid ${props => props.theme.border}; */
  border: 2px solid red;
  padding: 8px;
  margin: 0 auto;
  background-color: ${base.colors.alabaster50};
  @media screen and (min-width: 480px) {
    grid-template-columns: 460px;
    grid-template-rows: 160px 100px 40px;
  }
`;
export const WrapMain = styled.div`
  display: grid;
  grid-template-columns: minmax(296px, 444px);
  /* grid-template-rows: auto auto; */
  padding: 0;
  margin: 0;
  @media screen and (min-width: 480px) {
    grid-template-columns: 240px 212px;
    grid-template-rows: 160px;
    column-gap: 8px;
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
  gap: 16px;
  grid-template-columns: 1fr;
  grid-template-rows: 28px 1fr;
  align-items: flex-start;
  /* background-color: aqua; */
  padding: 8px;
`;
export const WrapTag = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr;
  justify-content: flex-start;
  align-items: center;
  column-gap: 8px;
  padding: 0;
  .icon-tag {
    width: 20px;
    height: 20px;
    /* fill: ${props => props.theme.fill}; */
    fill: red;
  }
  .post-tag {
    box-sizing: border-box;
    font-size: 20px;
    /* color: ${props => props.theme.title}; */
    color: red;
  }
`;
export const WrapTitle = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  padding: 0;
  .icon-title {
    width: 20px;
    height: 20px;
    fill: red;
  }
  .post-title {
    box-sizing: border-box;
    font-size: 20px;
    color: red;
    word-wrap: break-word;
    overflow-wrap: anywhere;
  }
`;
export const WrapText = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 444px);
  grid-template-rows: 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  /* .post-text {
    font-size: 16px;
    color: #ff1744;
    overflow-y: auto;
    scroll-behavior: smooth;
  } */
  @media screen and (min-width: 480px) {
    grid-template-rows: 100px;
  }
`;
export const PostText = styled.p`
  display: grid;
  grid-template-columns: minmax(280px, 444px);
  grid-template-rows: 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  font-size: 16px;
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
    background: ${base.colors.alabaster300};
  }
  /* &::-webkit-scrollbar-thumb:hover {
    background: #249fa3;
  } */
  @media screen and (min-width: 480px) {
    grid-template-rows: 100px;
  }
`;
export const WrapReviews = styled.div`
  display: grid;
  /* grid-template-columns: 40px 1fr 40px; */
  grid-template-columns: minmax(280px, 444px);
  grid-template-rows: 40px 40px;
  gap: 4px;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 480px) {
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 40px;
  }
`;
export const WrapLikes = styled.div`
  display: grid;
  grid-template-columns: 36px 36px 36px;
  gap: 4px;
  justify-content: flex-start;
  align-items: center;
`;
export const CountLike = styled.span`
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 36px;
  height: 36px;
  margin: 0;
  padding: 4px;
`;
export const WrapComment = styled.div`
  display: grid;
  grid-template-columns: 1fr 36px 36px;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`;
export const ForComment = styled.input`
  display: grid;
  grid-template-columns: minmax(200px 1fr);
  border-radius: 8px;
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
    width: 36px;
    height: 36px;
  }
  .like {
    fill: #ffd740;
  }
  .coment {
    fill: #ffd740;
  }
  .send {
    fill: #ffd740;
  }
  .dots {
    fill: #ffd740;
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

export const WrapBtnEdit = styled.div`
  display: grid;
  grid-template-columns: minmax(292px, 1fr);
  grid-template-rows: 40px 40px;
  gap: 8px;
  .btn {
    box-sizing: border-box;
    display: grid;
  }
  @media screen and (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40px;
  }
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
  /* background-color: orchid; */
  padding: 0;
  background-color: ${base.colors.alabaster200};
  .empty-title {
    font-size: clamp(1rem, 0.636rem + 1.82vw, 2rem);
    color: ${base.colors.alabaster800};
    font-weight: 500;
  }
  .icon-empty {
    width: 240px;
    height: 320px;
    fill: ${base.colors.alabaster400};
  }
`;
