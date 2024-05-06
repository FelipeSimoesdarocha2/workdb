import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(16, 92, 134);
  min-height: 378px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 200px;
  position: relative;
  width: 100%;
  background: rgb(16, 92, 134);

  @media (max-width: 750px) {
    #img {
      display: none;
    }
  }
`;

export const Container_Image = styled.div`
  position: relative;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  div {
    position: relative;
    width: 100%;
    height: 100%;
  }

  img:first-child {
    position: absolute;
    top: 80px;
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

  @media (max-width: 1300px) {
    opacity: 0.2;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 22px;
  overflow: hidden;

  @media (max-width: 1300px) {
    backdrop-filter: blur(16px);
  }
`;

export const Title = styled.div`
  z-index: 2;

  h1 {
    color: #fafafa;
    font-size: 23px;
    font-weight: 400;
    line-height: 0.8em;
    font-family: 'poppins', sans-serif;
  }

  span {
    color: #00b4db;
    font-size: 23px;
    font-weight: bold;
    line-height: 0.8em;
    font-family: 'poppins', sans-serif;
    display: inline-block;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  z-index: 2;

  p {
    color: #fafafa;
    font-size: 20px;
    font-weight: 400;
    font-family: poppins, sans-serif;
  }

  a {
    color: #00b4db;
    font-size: 20px;
    font-family: poppins, sans-serif;
    display: inline-block;
    padding: 0 4px;
  }

  a:hover {
    opacity: 0.9;
  }

  p {
    color: #fff;
    font-size: 18px;
    font-family: 'open sans', sans-serif;
    max-width: 463px;
  }
`;
