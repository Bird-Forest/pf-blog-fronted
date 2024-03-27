import styled from 'styled-components';
// import MainBg from '../img/main-bg.jpg';
// import TextureBg from '../img/texture-bg.jpg';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr;
`;

export const WrapHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px;
  background-color: aqua;
`;

export const WrapRender = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background-color: orange;
`;

export const WrapNav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 36px;
  justify-content: center;
  align-items: center;
`;
