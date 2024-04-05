import styled from 'styled-components';
import { base } from 'baseTheme';

export const Container = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 7vh 93vh;
  justify-content: center;
  align-items: start;
  background-color: ${base.colors.ground};
  padding: 0;
  margin: 0 auto;
`;

export const WrapHeader = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 6.5vh;
  justify-content: center;
  align-items: center;
  background-color: ${base.colors.green500};
  border-bottom: 2px solid ${base.colors.yellow};
`;

export const WrapRender = styled.main`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: max-content;
  background-color: ${base.colors.ground};
  padding: 0;
  margin: 0 auto;
`;
