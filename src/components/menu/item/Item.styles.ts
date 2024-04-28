import styled from 'styled-components';

export const Component = styled.button`
  display: flex;
  align-items: center;
  margin: 4px;
  padding: 10px;
  cursor: pointer;
  border-bottom: 2px solid rgba(255, 255, 255, 0);

  p {
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.15em;
    letter-spacing: 0.05em;
    text-align: start;
    font-style: normal;
    caret-color: transparent;
    font-family: 'open sans', sans-serif;
    transition: color 250ms;
  }

  p::selection {
    background: none;
  }

  &.active {
    p {
      color: rgba(250, 250, 250, 0.49);
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
