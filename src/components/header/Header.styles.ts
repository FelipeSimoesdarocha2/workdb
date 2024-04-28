import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  height: 100px;
  background-color: #235c88;
  border-right: 1px solid #e9ebf1;
  box-shadow: 0px 8px 10px 3px #0000001a;
  z-index: 100;

  &.active {
    visibility: hidden;
    opacity: 0;
    height: 0px;
    transition: all 750ms;
  }
`;
