import styled from 'styled-components';
import MainBg from '../img/main-bg.jpg';
// import TextureBg from '../img/texture-bg.jpg';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  background-image: url(${MainBg});
  background-repeat: repeat;
  background-position: center;
  background-size: cover;
`;
