import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  position: relative;

  div::-webkit-scrollbar {
    width: 6px !important;
  }

  div::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgba(63, 67, 80, 0.24);
  }

  div::-webkit-scrollbar-thumb:hover {
    background: rgba(63, 67, 80, 0.32);
  }

  .whatsapp {
    position: fixed;
    z-index: 998;
    bottom: 30px;
    right: 30px;

    @media (max-width: 560px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      overflow: hidden;
      background-color: rgb(33 211 102);
      right: 15px;
      bottom: 15px;

      img {
        width: 17px;
      }
    }
  }

  .whatsapp:hover {
    opacity: 0.8;
    box-shadow: 0px 5px 5px 0px #cccccc;
    border-radius: 50%;
  }

  .whatsapp:active {
    transform: scale(0.8);
    transition: all 250ms ease;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  a {
    display: flex;
    align-items: center;
    padding: 4px 6px;
    height: 40px;
    background: #ffffff;
    border-radius: 10px;
    transition: all 500ms;
  }

  a:hover {
    transition: all 500ms;
    border: 0px solid #8a8a8a;
    background: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 560px) {
    a {
      border-radius: 0 10px 0 10px;
    }
  }
`;

export const MenuMobile = styled.div`
  cursor: pointer;

  .menu_icon,
  .exit_icon {
    transition: transform 0.5s ease;
  }

  .exit_icon {
    transform: rotate(180deg);
  }
`;
