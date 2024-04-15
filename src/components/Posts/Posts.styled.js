import { base } from 'baseTheme';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// ******* MAIN SETTING *******
export const WrapPostPage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100vh;
  justify-content: center;
  align-items: start;
  background-color: ${base.colors.ground};
  padding: 8px;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    padding: 16px 8px;
  }
`;
export const WrapList = styled.ul`
  display: grid;
  grid-template-columns: minmax(288px, 1fr);
  grid-template-rows: 1fr;
  justify-content: start;
  align-items: center;
  gap: 16px;
  padding: 8px;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    padding: 16px 8px;
  }
  @media screen and (min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 16px;
  }
`;
export const WrapPanelPost = styled.li`
  display: grid;
  grid-template-columns: minmax(304px, 552px);
  grid-template-rows: auto auto;
  gap: 4px;
  padding: 0;
  margin: 0 auto;
`;
export const WrapUserPost = styled.li`
  display: grid;
  grid-template-columns: minmax(304px, 552px);
  grid-template-rows: auto;
  padding: 0;
  margin: 0 auto;
`;
export const WrapLink = styled(Link)`
  text-decoration: none;
  padding: 0;
  margin: 0;
`;

// *******   POST USER PANEL *******
export const WrapPanel = styled.div`
  display: grid;
  grid-template-columns: 272px 1fr;
  .bgr {
    display: grid;
    grid-template-columns: 36px 124px 40px 56px;
    grid-template-rows: 36px;
    justify-content: start;
    align-items: center;
    gap: 4px;
    border: none;
    border-radius: 30px;
    background-color: #ffffff;
    padding: 2px 2px;
    margin: 0;
  }
`;
export const PanelAvatar = styled.div`
  display: grid;
  grid-template-rows: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: yellow;
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
export const PanelName = styled.p`
  display: grid;
  justify-content: start;
  align-items: center;
  font-size: clamp(12px, 0.614rem + 0.68vw, 18px);
  font-weight: 600;
  color: ${base.colors.green900};
  padding: 4px;
`;
export const CountLike = styled.span`
  display: grid;
  justify-content: start;
  align-items: center;
  font-size: clamp(12px, 0.659rem + 0.45vw, 16px);
  color: ${base.colors.green900};
  margin: 0;
  padding: 4px;
`;

// *******   POST *******
export const WrapPost = styled.div`
  display: grid;
  grid-template-columns: minmax(288px, 552px);
  justify-content: start;
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
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
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
  grid-template-columns: 1fr;
  grid-template-rows: 20px 1fr;
  align-items: start;
  gap: 8px;
  padding: 8px;
`;
export const WrapTag = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  column-gap: 8px;
  padding: 0;
  .tags {
    display: grid;
    grid-template-columns: 20px 1fr;
    justify-content: start;
    align-items: center;
    gap: 8px;
  }
  .icon-tag {
    width: 16px;
    height: 16px;
    fill: ${base.colors.yellow};
  }
  .post-tag {
    box-sizing: border-box;
    font-size: clamp(16px, 0.955rem + 0.23vw, 18px);
    font-weight: 700;
    color: ${base.colors.yellow};
  }
  .date {
    box-sizing: border-box;
    font-size: clamp(12px, 0.705rem + 0.23vw, 14px);
    font-weight: 400;
    text-align: end;
    color: ${base.colors.green900};
  }
`;
export const WrapTitle = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  justify-content: start;
  align-items: start;
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
  justify-content: start;
  align-items: start;
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
  grid-template-columns: 28px 1fr 28px 28px;
  grid-template-rows: 36px;
  gap: 4px;
  justify-content: start;
  align-items: center;
  padding: 2px 0;
`;
export const ForComment = styled.input`
  display: grid;
  grid-template-columns: 1fr;
  justify-self: stretch;
  align-self: stretch;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 4px 6px;
`;
export const BtnIcons = styled.button`
  display: grid;
  align-items: center;
  background-color: transparent;
  border: none;
  padding-inline: 0;
  cursor: pointer;
  .icon {
    width: 24px;
    height: 24px;
    padding: 0;
  }
  .like {
    fill: ${base.colors.like};
  }
  .coment {
    fill: ${base.colors.yellow};
  }
  .send {
    fill: ${base.colors.yellow};
  }
  .dots {
    fill: ${base.colors.green900};
  }
`;

// *******   USER POST  *******
export const WrapPostId = styled.div`
  display: grid;
  grid-template-columns: minmax(268px, 1fr);
  grid-template-rows: 1fr 40px 74px;
  gap: 16px;
  padding: 4px;
  margin: 0 auto;
`;
export const WrapItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 8px;
  padding: 0;
  margin: 0 auto;
`;
export const BackLink = styled(Link)`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #ffffff;
  background-color: ${base.colors.green100};
  transition: all 0.3s;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: ${base.colors.green200};
  }
`;

// *******   CREATE  POST *******
export const WrapCreate = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(304px, 552px);
  grid-template-rows: 1fr 74px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    padding: 16px 8px;
  }
`;
export const FormPost = styled.form`
  display: grid;
  grid-template-columns: minmax(288px, 552px);
  grid-template-rows: 40px 40px 40px 1fr 88px;
  justify-content: start;
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
    justify-content: start;
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
  grid-template-columns: minmax(288px, 1fr);
  grid-template-rows: 40px 40px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  .btn {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 40px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    text-align: center;
    background-color: ${base.colors.green500};
    transition: all 0.3s;
    border: none;
    border-radius: 20px;
    text-decoration: none;
    padding: 0;
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

// *******   USER POST EDIT *******
export const WrapEditPost = styled.div`
  display: grid;
  grid-template-columns: minmax(268px, 552px);
  grid-template-rows: 40px auto 40px auto 88px auto;
  justify-content: start;
  align-items: center;
  border-radius: 14px;
  gap: 16px;
  background-color: ${base.colors.green50};
  padding: 4px;
  margin: 0 auto;
  .wrap-radio {
    display: grid;
    grid-template-columns: repeat(auto-fit, 84px);
    justify-content: start;
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
    justify-content: start;
    align-items: center;
    gap: 4px;
    font-size: 16px;
    font-weight: 500;
    color: ${base.colors.green900};
  }
  .textarea {
    display: grid;
    grid-template-columns: 1fr;
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
    /* grid-template-columns: 460px; */
    grid-template-rows: 40px 40px 40px 1fr 40px auto;
  }
`;
