import styled, { css } from 'styled-components';

const Row = styled.div`
  display: flex;

  ${(props) => {
    if (props.gap) {
      return css`
        gap: ${props.gap}rem;
      `;
    }

    if (props.type === 'horizontal') {
      return css`
        justify-content: space-between;
      `;
    }
  }}

  ${(props) =>
    props.type === 'vertical' &&
    css`
      flex-direction: column;
      gap: ${props.gap || 1.6}rem;
    `}
`;

Row.defaultProps = {
  type: 'horizontal',
};

export default Row;
