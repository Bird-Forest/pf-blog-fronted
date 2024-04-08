import styled from 'styled-components';
import { base } from 'baseTheme';

// ******** PROFILE ********
export const WrapProfile = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(304px, 552px));
  grid-template-rows: 1fr 1fr 40px;
  justify-content: center;
  align-items: center;
  background-color: ${base.colors.green50};
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  padding: 16px 8px;
  margin: 0 auto;
`;

export const WrapUpload = styled.div`
  display: grid;
  .input-hidden {
    opacity: 0;
    width: 0;
    height: 0;
    line-height: 0;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }
  .btn-choose {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    color: #424242;
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 60px;
    height: 24px;
    padding: 0;
  }
`;

export const WrapUserName = styled.div``;
