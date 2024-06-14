import styled, { keyframes } from 'styled-components';

const openAnimation = keyframes`
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: 100vh;
    opacity: 1;
  }
`;

const closeAnimation = keyframes`
  from {
    height: 100vh;
    opacity: 1;
  }
  to {
    height: 0;
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 998;

  position: fixed;
  width: 100%;
  height: 0;
  overflow: hidden;
  background-color: #141416;
  animation: ${openAnimation} 0.5s ease;

  &.open {
    height: 100vh;
    opacity: 1;
  }

  &.close {
    animation: ${closeAnimation} 1s ease;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  height: 100%;

  padding: 0 24px;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
`;

export const Menus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .iten_menu {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    cursor: pointer;
  }

  .iten_content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    width: 100%;
    padding: 10px 8px;

    svg {
      width: 10% !important;
    }
  }

  .iten_content:hover {
    border-radius: 8px;
    background: #f6f4fb;
  }

  .iten_content p {
    color: #455a64;
    font-size: 16px;
    font-weight: 400;
    font-weight: 700;
    line-height: 140%;
    text-align: center;
    white-space: nowrap;
  }

  svg path {
    fill: #455a64;
  }

  .active {
    p {
      color: var(--purple);
    }

    svg path {
      fill: var(--purple);
    }
  }
`;
