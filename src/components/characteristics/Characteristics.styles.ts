import styled from 'styled-components';

export const Component = styled.div`
  width: 100%;
  height: 100;
  background-color: #fafafa;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 475px;
  position: relative;
  width: 100%;

  @media (min-width: 1400px) {
    background-repeat: repeat;
    background-size: cover;
  }

  video {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 1;
  }

  #video_container {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .bg {
    position: absolute;
    background-color: rgb(16, 92, 134);
    opacity: 0.5;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 100px;
  z-index: 2;

  @media (max-width: 1101px) {
    flex-direction: column;
    margin: 50px 0;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 33px;

  h1 {
    color: #fafafa;
    font-size: 29px;
    font-family: 'poppins', sans-serif;
  }

  span {
    font-family: 'poppins', sans-serif;
    display: inline-block;
    background-color: #00b5db;
  }

  p {
    color: #fafafa;
    font-size: 18px;
    line-height: 1.4em;
    font-family: 'poppins', sans-serif;
    max-width: 475px;
  }
`;

export const Flag = styled.div`
  display: flex;
  gap: 70px;

  img {
    max-width: 73px;
  }
`;
