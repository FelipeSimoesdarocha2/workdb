import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-bottom: 2px solid transparent;

  & > a {
    padding: 10px;
    margin: 4px;
  }

  & > a {
    color: #ffffff;
    font-size: 16px;
    line-height: 1.15em;
    letter-spacing: 0.05em;
    white-space: nowrap;
    text-transform: capitalize;
    transition: color 250ms;

    &:hover {
      color: rgba(250, 250, 250, 0.49);
    }

    &.active {
      color: rgba(250, 250, 250, 0.74);
    }

    &:active {
      transform: scale(0.95);
    }

    ::selection {
      background: none;
    }
  }

  &:hover {
    border-bottom: 2px solid #898989;

    #sub_menu {
      opacity: 1;
      visibility: visible;
    }
  }

  &.active a {
    color: rgba(250, 250, 250, 0.74);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50px;
  opacity: 0;
  visibility: hidden;
  border-radius: 2px;
  background: #105c86;
  border: 0px solid rgb(0, 180, 219);
  box-shadow: 0.71px 0.71px 33px -29px rgb(16, 92, 134);
  z-index: 100;
  overflow: hidden;
  transition: opacity 0.3s ease;

  a {
    color: #fff;
    font-size: 15px;
    line-height: 1.19em;
    text-align: center;
    text-transform: capitalize;
    font-family: 'open sans', sans-serif;
    white-space: nowrap;
  }

  .item {
    padding: 7px 11px;
    margin-bottom: 6px;
    width: 100%;
    background:
      repeat padding-box border-box 0% / auto scroll
        linear-gradient(180deg, rgba(0, 180, 219, 0.1) 0%, rgba(0, 180, 219, 0.1) 100%),
      rgba(247, 247, 247, 0);
  }

  .item:hover {
    background: rgba(219, 219, 219, 0.28);
  }
`;
