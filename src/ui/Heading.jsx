import styled, { css } from 'styled-components';

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 3.2rem;
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 2.4rem;
    `} 

  ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 2rem;
    `}

  color: var(--color-grey-900);
  line-height: 1.2;
`;

export default Heading;
