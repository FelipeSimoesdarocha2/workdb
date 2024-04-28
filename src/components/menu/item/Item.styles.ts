import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;

  a {
    padding: 10px;
    margin: 4px;
  }

  a {
    color: #ffffff;
    font-size: 16px;
    line-height: 1.15em;
    letter-spacing: 0.05em;
    transition: color 250ms;
    white-space: nowrap;
  }

  a::selection {
    background: none;
  }

  &.active {
    p {
      color: rgba(250, 250, 250, 0.74);
    }
  }

  &:hover {
    border-bottom: 2px solid #898989;

    a {
      color: rgba(250, 250, 250, 0.49);
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;
