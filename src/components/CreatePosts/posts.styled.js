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
  display: grid;
  /* grid-template-columns: minmax(280px, 780px); */
  /* grid-template-rows: auto-fit; */
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: white;
  border-radius: 10px;
  padding: 16px;
  margin: 0 auto;
  @media screen and (min-width: 767px) {
    grid-template-columns: 780px;
  }
`;
export const WrapImgPost = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 780px);
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  .img-post {
    /* display: grid; */
    border-radius: 12px;
    justify-self: stretch;
    align-self: stretch;
    /* background-size: cover;
    background-position: center; */
  }
`;
export const WrapInfo = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr;
  grid-template-rows: 28px 28px 1fr;
  background-color: aqua;
  border-radius: 10px;
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
export const WrapReviews = styled.div`
  display: grid;
  grid-template-columns: 40px 40px 60px;
  justify-content: flex-start;
  align-items: center;
  .btn-like {
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
  }
  .icon-like {
    fill: #ffd740;
    width: 40px;
    height: 40px;
  }
  .counter {
    width: 40px;
    height: 40px;
  }
  .btn-comment {
    width: 60px;
    height: 40px;
  }
`;
