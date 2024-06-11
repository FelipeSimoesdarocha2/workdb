import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid transparent;

  @media (max-width: 560px) {
    width: 100%;
    height: 68px;
    border-bottom: 1px solid rgb(138 138 138 / 21%);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 4px;
    width: 100%;
    height: 100%;
  }

  a {
    color: #ffffff;
    font-size: 16px;
    line-height: 1.15em;
    letter-spacing: 0.05em;
    white-space: nowrap;
    text-transform: capitalize;
    transition: color 250ms;

    @media (max-width: 560px) {
      font-size: 17px;
      color: rgb(138, 138, 138);
    }
  }

  a::selection {
    background: none;
  }

  &.active {
    a {
      color: rgba(250, 250, 250, 0.74);

      @media (max-width: 560px) {
        color: rgb(0, 175, 211);
      }
    }
  }

  &:hover {
    border-bottom: 2px solid #898989;

    @media (max-width: 560px) {
      background-color: #222325;
    }

    a {
      color: rgba(250, 250, 250, 0.49);
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;
