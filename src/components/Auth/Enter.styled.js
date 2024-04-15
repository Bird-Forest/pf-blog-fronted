import styled from 'styled-components';
import { base } from 'baseTheme';
import imgBg from '../../img/woman.png';
// import { Link } from 'react-router-dom';

export const WrapEnter = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 100vh;
  justify-content: center;
  align-items: end;
  background-color: ${base.colors.ground};
  padding: 20px 8px;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    padding: 16px 8px;
  }
`;

// *******   AUTH  *******

export const WrapAuth = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(288px, 552px));
  grid-template-rows: 1fr 40px;
  justify-content: center;
  align-items: end;
  gap: 16px;
  padding: 0 8px;
`;
export const WrapOutlet = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-image: url(${imgBg});
  background-size: 280px 280px;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 4px;
  padding: 0;
  margin: 0 auto;
`;

// *******   NAVIGATE  *******
export const WrapWell = styled.h2`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: end;
  font-size: clamp(16px, 0.909rem + 0.45vw, 20px);
  font-weight: 600;
  text-align: center;
  color: ${base.colors.yellow};
  padding: 8px;
  margin: 0 auto;
`;
export const WrapNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 40px;
  .navigate {
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    align-items: center;
    font-size: clamp(16px, 0.909rem + 0.45vw, 20px);
    font-weight: 700;
    color: ${base.colors.green900};
    text-decoration: none;
    transition: all 0.3s;
    background-color: ${base.colors.green500};
    padding: 0;
    cursor: pointer;
    &.active {
      background-color: ${base.colors.green50};
    }
  }
  .left {
    border-top-right-radius: 80px;
    border-top-left-radius: 16px;
  }
  .right {
    border-top-right-radius: 16px;
    border-top-left-radius: 80px;
  }
`;

// *******   FORM  *******

export const WrapSign = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(288px, 552px));
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: start;
  padding: 0 8px;
`;

export const WrapForm = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(272px, 552px));
  grid-template-rows: 300px;
  justify-content: center;
  align-items: center;
  background-color: ${base.colors.green50};
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  padding: 0 8px;
  margin: 0 auto;
  .form-up {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 40px;
    gap: 16px;
  }
  .form-in {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 40px;
    gap: 16px;
  }
`;

export const WrapInputName = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 16px 40px;
  gap: 4px;
  padding: 0;
  margin: 0;
  .label-input {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 14px;
    text-align: start;
    color: ${base.colors.green900};
    pointer-events: none;
    transition: all 0.2s ease-in-out;
    padding: 0 0 0 8px;
    margin: 0;
  }
  .label-input.error {
    color: #ff1744;
  }
  .name-input {
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
  .name-input.error {
    border: 1px solid #ff1744;
  }
`;

export const WrapInputPass = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 16px 40px;
  gap: 4px;
  padding: 0;
  .label-input {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 14px;
    text-align: start;
    color: ${base.colors.green900};
    pointer-events: none;
    transition: all 0.2s ease-in-out;
    padding: 0 0 0 8px;
    margin: 0;
  }
  .label-input.error {
    color: #ff1744;
  }
  .pass-input {
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
  .pass-input.error {
    border: 1px solid #ff1744;
  }
  .btn-eye {
    position: absolute;
    top: 30px;
    right: 8px;
    display: flex;
    width: 20px;
    height: 20px;
    padding: 0;
    background-color: #ffffff;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .icon-eye {
    width: 20px;
    height: 20px;
    fill: ${base.colors.green900};
  }
`;

export const MessError = styled.div`
  color: #ff1744;
  font-size: 12px;
`;

export const BtnAuth = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background-color: ${base.colors.green500};
  transition: all 0.3s;
  border: none;
  border-radius: 20px;
  text-decoration: none;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: ${base.colors.green700};
  }
`;
