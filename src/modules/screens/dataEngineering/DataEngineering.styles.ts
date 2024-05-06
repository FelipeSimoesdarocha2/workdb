import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
  padding: 100px 0 0;
  background-color: rgb(16, 92, 134);
  overflow: hidden;

  @media (max-width: 1101px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
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

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 200;
  text-align: center;
  text-transform: uppercase;
  font-family: 'poppins', sans-serif;

  span {
    color: #00b5db;
    font-size: 60px;
    font-weight: bold;
    line-height: 0.8em;

    @media (max-width: 1101px) {
      font-size: 44px;
    }
  }
`;
