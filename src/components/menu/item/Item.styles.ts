import styled from 'styled-components';

export const Component = styled.button`
  display: flex;
  align-items: center;
  margin: 4px;
  padding: 10px;
  border-bottom: 2px solid transparent;

  p {
    color: #ffffff;
    font-size: 16px;
    line-height: 1.15em;
    letter-spacing: 0.05em;
    transition: color 250ms;
  }

  p::selection {
    background: none;
  }

  &.active {
    p {
      color: rgba(250, 250, 250, 0.74);
    }
  }

  &:hover {
    border-bottom: 2px solid #898989;

    p {
      color: rgba(250, 250, 250, 0.49);
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;
