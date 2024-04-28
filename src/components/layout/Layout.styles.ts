import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
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
`;
