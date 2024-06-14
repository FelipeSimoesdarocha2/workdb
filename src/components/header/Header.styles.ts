import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: rgba(16, 92, 134, 1);
  border-right: 1px solid #e9ebf1;
  transition: all 500ms ease-out;

  &.active {
    visibility: hidden;
    opacity: 0;
    height: 0px;
    transition: all 750ms;

    > div {
      filter: blur(1rem);
      transition: all 250ms;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
  width: 100%;
  max-width: 1160px;
  padding: 0 22px;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
`;
