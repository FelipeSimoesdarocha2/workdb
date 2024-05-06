import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  min-height: 511px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 68px 0 0;

  @media (max-width: 1100px) {
    gap: 2rem;
    padding: 0 2rem 0;
  }
`;

export const Title = styled.div`
  color: #105c86;
  font-size: 33px;
  font-weight: bold;
  line-height: 1em;
  font-family: 'poppins', sans-serif;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 100%;
  height: 100%;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 679px;

  p {
    color: #7a7a7a;
    font-size: 18px;
    line-height: 1.8em;
    font-family: 'open sans', sans-serif;
  }
`;

export const Container_Image = styled.div`
  position: relative;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 30%;

  div {
    position: relative;
    width: 100%;
    height: 100%;
  }

  img:first-child {
    position: absolute;
    top: 200px;
    bottom: auto;
    right: auto;
    left: -160px;
  }

  img:last-child {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0px;
  }

  @media (max-width: 1100px) {
    opacity: 0.1;
  }
`;
