import styled from 'styled-components';
// import MainBg from '../img/main-bg.jpg';
// import TextureBg from '../img/texture-bg.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  /* display: grid; */
  /* grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr; */
`;

export const WrapHeader = styled.div`
  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8vh;
  background-color: #4caf50;
  /* border-top: 8px solid #357a38; */
  border-bottom: 1px solid #43a047;
`;

export const WrapRender = styled.main`
  display: flex;
  width: 100%;
  /* height: 92vh; */
  max-height: max-content;
  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr; */
  background-color: #6fbf73;
`;
