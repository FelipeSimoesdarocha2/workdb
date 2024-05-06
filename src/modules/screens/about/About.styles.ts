import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  width: 100%;
  position: relative;

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

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  z-index: 5;
  margin: 140px 0 0;

  h1 {
    color: #fff;
    font-weight: 400;
    font-size: 52px;
    line-height: 1em;
    text-align: center;
    font-family: 'poppins', sans-serif;
  }

  span {
    color: #00b5db;
    font-size: 68px;
    font-weight: bold;
    line-height: 1em;
    text-align: center;
    display: inline-block;
    font-family: poppins, sans-serif;
  }
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 40px;

  position: relative;
  min-height: 260px;
  background-image: radial-gradient(
      circle at 94.35384114583333% 89.61588541666666%,
      #105c86 0%,
      20%,
      rgba(16, 92, 134, 0) 40%
    ),
    radial-gradient(
      circle at 6.503906249999999% 88.037109375%,
      rgba(16, 92, 134, 0.99) 0%,
      25%,
      rgba(16, 92, 134, 0) 50%
    ),
    radial-gradient(circle at 5.833333333333333% 15%, #105c86 0%, 42%, rgba(16, 92, 134, 0) 70%),
    radial-gradient(circle at 93.6865234375% 11.42578125%, #00b4db 0%, 42%, rgba(0, 180, 219, 0) 70%),
    radial-gradient(circle at 48.9013671875% 49.521484375%, #141416 0%, 100%, rgba(20, 20, 22, 0) 100%);

  @media (max-width: 750px) {
    #img {
      display: none;
    }
  }
`;

export const Container_Image = styled.div`
  position: relative;
  width: auto;

  div {
    position: relative;
    width: 100%;
    height: 100%;
  }

  img:first-child {
    position: absolute;
    top: -100px;
    bottom: auto;
    right: auto;
    left: -60px;
  }

  img:last-child {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -220px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  z-index: 2;
  backdrop-filter: blur(16px);
  padding: 10px;
`;

export const Typography = styled.div`
  h1 {
    color: #fafafa;
    font-size: 30px;
    font-weight: 400;
    line-height: 1em;
    font-family: poppins, sans-serif;
  }

  span {
    color: #00b4db;
    font-size: 50px;
    font-weight: bold;
    line-height: 0.8em;
    font-family: poppins, sans-serif;
  }

  p {
    color: #fff;
    font-size: 18px;
    font-family: 'open sans', sans-serif;
    max-width: 463px;
  }
`;
