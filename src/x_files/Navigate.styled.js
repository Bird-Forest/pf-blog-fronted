import styled from 'styled-components';
import { base } from 'baseTheme';

export const WrapNav = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0;
  .navigate {
    font-size: clamp(16px, 0.909rem + 0.45vw, 20px);
    font-weight: 600;
    color: ${base.colors.green900};
    text-decoration: none;
    transition: all 0.3s;
    &.active {
      color: #ffffff;
    }
  }
`;
