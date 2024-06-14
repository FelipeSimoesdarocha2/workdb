import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-bottom: 2px solid transparent;

  @media (max-width: 560px) {
    flex-direction: column;
    width: 100%;
    min-height: 68px;
    border-bottom: 1px solid rgb(138 138 138 / 21%);
  }

  a,
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 4px;
    width: 100%;
    height: 100%;
  }

  button {
    max-height: 60px;
  }

  .openBtn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 1s ease-in-out;

    img {
      width: 12px;
      height: 11px;
    }
  }

  .open img {
    transform: rotate(180deg);
    transition: 500ms;
  }

  .close img {
    transition: 500ms;
  }

  a,
  p {
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

  p::selection {
    background: none;
  }

  &.active {
    a,
    p {
      color: rgba(250, 250, 250, 0.74);

      @media (max-width: 560px) {
        color: rgb(0, 175, 211);
      }
    }
  }

  &:hover {
    > :first-child {
      border-bottom: 2px solid #898989;
    }

    #sub_menu {
      opacity: 1;
      visibility: visible;
    }

    @media (max-width: 560px) {
      > :first-child {
        background-color: #222325;
      }
    }

    > a,
    p {
      color: rgba(250, 250, 250, 0.49);
    }
  }

  &:active {
    > a,
    p {
      transform: scale(0.95);
    }
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

  @media (max-width: 560px) {
    position: static;
    width: 100%;
    height: 100%;
    opacity: 1;
    visibility: visible;
    background: none;
  }

  a {
    color: #fff;
    font-size: 15px;
    line-height: 1.19em;
    text-align: center;
    text-transform: capitalize;
    font-family: 'open sans', sans-serif;
    white-space: nowrap;

    @media (max-width: 560px) {
      width: 100%;
      font-size: 17px;
      color: rgb(138, 138, 138);
      margin: 0;
    }

    &:active {
      a {
        transform: scale(0.95);
      }
    }
  }

  .item {
    padding: 7px 11px;
    margin-bottom: 6px;
    width: 100%;
    background:
      repeat padding-box border-box 0% / auto scroll
        linear-gradient(180deg, rgba(0, 180, 219, 0.1) 0%, rgba(0, 180, 219, 0.1) 100%),
      rgba(247, 247, 247, 0);

    @media (max-width: 560px) {
      width: 100%;
      height: 60px;
      background: none;
      padding: 7px 0;
      margin: 0;
    }
  }

  .item:hover {
    background: rgba(219, 219, 219, 0.28);

    @media (max-width: 560px) {
      background: #222325;
    }
  }

  .active {
    background:
      repeat padding-box border-box 0% / auto scroll
        linear-gradient(180deg, rgba(0, 180, 219, 0.37) 0%, rgba(0, 180, 219, 0.37) 100%),
      rgba(247, 247, 247, 0);

    @media (max-width: 560px) {
      a {
        color: rgb(0, 175, 211) !important;
      }
      background: none;
    }
  }
`;
