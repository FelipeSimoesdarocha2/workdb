// Assets
import bg_fixed from 'assets/pages/cloud/bg_fixed.webp';

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
  color: #00b5db;
  font-size: 60px;
  line-height: 0.8em;
  text-transform: uppercase;
  font-family: 'poppins', sans-serif;

  @media (max-width: 1101px) {
    font-size: 44px;
  }
`;

export const Contact_Intro = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 492px;
  background-blend-mode: multiply;
  background-image: url(${bg_fixed.src});
  background-clip: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
`;

export const Typography_Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  max-width: 533px;

  h1 {
    color: #00b4db;
    font-size: 33px;
    line-height: 1.2em;
    font-family: 'poppins-semibold', poppins, sans-serif;
  }

  p {
    color: #fafafa;
    font-size: 21px;
    line-height: 1.5em;
    font-family: 'open sans', sans-serif;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: rgb(255, 255, 255);
  font-size: 16px;
  padding-inline-start: 1.3em;
  margin-inline-start: 0.5em;
`;

export const Item = styled.li`
  list-style-type: disc;

  p {
    color: #fff;
    font-size: 16px;
    max-width: 455px;
  }
`;

export const Action_Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  max-width: 523px;
  height: 48px;
  padding: 0 32px;
  border-top-right-radius: 18px;
  border-bottom-left-radius: 18px;
  transition:
    all 0.2s ease,
    visibility;

  ::selection {
    background: none;
  }

  &:hover {
    background: #105c86;
    transition:
      all 0.2s ease,
      visibility;
  }

  a {
    color: #00B4DB;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-family: 'poppins-semibold', poppins, sans-serif;
  }
`;

export const Inner = styled.div``;
