import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 998;
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 16px 14px;
  background: #000000;

  @media (max-width: 560px) {
    flex-direction: column;
    gap: 16px;
    padding: 20px 14px 14px 14px;
  }
`;

export const Typography = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;

  p {
    color: #fff;
    font-size: 14px;
    padding: 0 18px 0 6px;
    line-height: 1.5;
    letter-spacing: 0;
    font-family: 'open sans', sans-serif;

    @media (max-width: 560px) {
      max-width: 367px;
    }
  }

  a {
    color: #fff;
    font-size: 14px;
    text-decoration-line: underline;
    display: inline-block;
    margin-left: 4px;
  }

  a:hover {
    opacity: 0.7;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 560px) {
    padding: 6px 6px 0;
    width: 100%;
  }

  button {
    height: 32px;
    padding: 0 16px;
    font-size: 14px;
    transition: all 250ms ease-in;
  }

  button:hover {
    opacity: 0.7;
  }

  button:active {
    transform: scale(0.9);
    transition: all 250ms ease-in;
  }

  .settings {
    border: solid 1px #fff;

    @media (max-width: 560px) {
      width: 100%;
    }
  }

  .settings p {
    color: #fff;
  }

  .acept {
    background: white;

    @media (max-width: 560px) {
      width: 100%;
    }
  }

  .exit {
    padding: 0;

    @media (max-width: 560px) {
      position: absolute;
      top: 5px;
      right: 10px;
    }
  }
`;
