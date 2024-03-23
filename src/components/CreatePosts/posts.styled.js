import styled from 'styled-components';
// import cat from 'https://pixabay.com/get/g02a97f31e2b2dd2a1c5c8ead70592368a620fcecf86153cd167614bacc98e98b575bc6711e775dbbf84da9438f608838_640.jpg';
// *******   CREATE  POST *******
export const WrapCreate = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 40px;
  background-color: blue;
`;

// *******   POST *******
export const WrapPost = styled.div`
  /* box-sizing: border-box; */
  display: grid;
  grid-template-columns: minmax(280px, 1fr);
  grid-template-rows: 200px 1fr;
  justify-content: flex-start;
  align-items: center;
  background-color: red;
  border-radius: 20px;
  padding: 16px;
  margin: 0 auto;
  @media screen and (min-width: 767px) {
    width: 760px;
  }
`;

export const WrapImgPost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 280px;
  height: 100%; */
  .img-post {
    display: block;
    min-width: 280px;
    height: auto;
    background-size: cover;
    background-position: center;
  }
`;

export const WrapInfo = styled.div`
  /* box-sizing: border-box; */
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr;
  grid-template-rows: 28px 28px 1fr;
  background-color: aqua;
  padding: 0;
`;

export const WrapTag = styled.div`
  display: grid;
  grid-template-columns: 28px 1fr;
  justify-content: flex-start;
  align-items: center;
  column-gap: 8px;
  padding: 0;
  .icon-tag {
    width: 24px;
    height: 24px;
    fill: red;
  }
  .post-tag {
    box-sizing: border-box;
    font-size: 20px;
    color: #ff1744;
    border-radius: 16px;
    padding: 4px 8px;
  }
`;
export const WrapTitle = styled.div`
  display: grid;
  grid-template-columns: 28px 1fr;
  justify-content: flex-start;
  align-items: center;
  column-gap: 8px;
  padding: 0;
  .icon-title {
    width: 24px;
    height: 24px;
    fill: red;
  }
  .post-title {
    box-sizing: border-box;
    font-size: 20px;
    color: #ff1744;
    border-radius: 16px;
    padding: 4px 8px;
  }
`;

export const PostText = styled.p`
  font-size: 16px;
  color: #ff1744;
  border-radius: 16px;
  padding: 8px;
  margin: 0;
`;
