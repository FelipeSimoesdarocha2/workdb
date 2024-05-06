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
  justify-content: center;
  width: 100%;
  overflow: hidden;

  @media (max-width: 790px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 466px;
  margin: 77px 0 0;
  width: 100%;

  .action a {
    color: #00b4db;
    font-weight: bold;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  h1 {
    color: #105c86;
    font-size: 33px;
    line-height: 1em;
    font-family: 'poppins', sans-serif;
  }

  p {
    color: #7a7a7a;
    font-size: 20px;
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

  @media (max-width: 790px) {
    opacity: 0.1;
  }
`;
