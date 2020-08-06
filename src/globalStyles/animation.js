import { css, keyframes } from 'styled-components';

const fadeInKeyframes = keyframes`
from {

  opacity:0;
}
to {

  opacity:1;
}
`;
export const fadeIn = ({
  time = '0.5s',
  type = 'ease',
  property = 'all',
} = {}) => css`
  animation: ${property} ${time} ${fadeInKeyframes} ${type};
`;
