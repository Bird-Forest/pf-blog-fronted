import styled from 'styled-components';

// import cat from 'https://pixabay.com/get/g02a97f31e2b2dd2a1c5c8ead70592368a620fcecf86153cd167614bacc98e98b575bc6711e775dbbf84da9438f608838_640.jpg';
// *******   CREATE  POST *******
export const WrapCreate = styled.div`
  display: grid;
  /* grid-template-columns: minmax(280px, 600px); */
  /* grid-template-rows: 1fr; */
  background-color: blue;
  padding: 16px;
  margin: 0 auto;
  @media screen and (min-width: 767px) {
    grid-template-columns: 780px;
  }
`;
// export const WrapForm = styled.div`
//   display: grid;
//   grid-template-columns: minmax(280px, 600px);
//   grid-template-rows: 1fr;
// `;
export const FormPost = styled.form`
  display: grid;
  grid-template-columns: minmax(280px, 780px);
  grid-template-rows: 40px 40px 40px 1fr 40px;
  gap: 16px;
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
    gap: 4px;
  }

  @media screen and (min-width: 767px) {
    grid-template-columns: 780px;
  }
`;

// *******   POST LIST *******
export const WrapPostsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 8px;
  padding: 8px;
  margin: 0 auto;

  /* @media screen and (min-width: 767px) {
    grid-template-columns: 780px;
  } */
`;

// *******   POST *******
export const WrapPost = styled.li`
  display: grid;
  grid-template-columns: minmax(280px, 1fr);
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid red;
  padding: 8px 8px 16px 8px;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    grid-template-columns: 462px;
    grid-template-rows: 160px 100px 40px;
  }
  /* @media screen and (min-width: 767px) {
    grid-template-columns: 780px;
  } */
`;

export const WrapMain = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 446px);
  /* grid-template-rows: auto auto; */
  padding: 0;
  margin: 0;
  @media screen and (min-width: 480px) {
    grid-template-columns: 240px 214px;
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
    fill: red;
  }
  .post-tag {
    box-sizing: border-box;
    font-size: 20px;
    color: #ff1744;
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
    color: #ff1744;
    word-wrap: break-word;
    overflow-wrap: anywhere;
  }
`;
export const WrapText = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 446px);
  grid-template-rows: 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  .post-text {
    font-size: 16px;
    color: #ff1744;
  }
`;
export const WrapReviews = styled.div`
  display: grid;
  grid-template-columns: 40px 40px 40px 272px 20px;
  gap: 8px;
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
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const ForComment = styled.input`
  border-radius: 8px;
  width: 272px;
  height: 36px;
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

// *******   EMPTY PAGE *******
export const WrapEmpty = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: orchid;
  .icon-empty {
    width: 100px;
    height: 100px;
    fill: blue;
  }
`;
