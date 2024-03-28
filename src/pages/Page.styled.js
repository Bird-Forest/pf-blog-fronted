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
  background-color: aqua;
`;

export const WrapRender = styled.div`
  display: flex;
  width: 100%;
  height: 92vh;
  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr; */
  background-color: orange;
`;

export const WrapNav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 36px;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 0 8px;
`;
