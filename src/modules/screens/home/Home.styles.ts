// Assets
import bg_fixed from 'assets/pages/home/bg_fixed.png';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Content = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 690px;
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
  flex-direction: column;
  gap: 3rem;
  margin: 92px 0 0;
  z-index: 5;

  @media (max-width: 1101px) {
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
  color: #00b5db;
  font-size: 55px;
  line-height: 1em;
  letter-spacing: 0em;
  text-transform: uppercase;
  font-family: poppins-semibold, poppins, sans-serif;
  max-width: 358px;

  @media (max-width: 1101px) {
    font-size: 44px;
  }
`;

export const Sub_Title = styled.div`
  color: #fff;
  font-size: 27px;
  font-weight: 400;

  @media (max-width: 1101px) {
    font-size: 18px;
  }

  span {
    color: #fff;
    font-size: 27px;
    font-weight: 700;
    display: inline-block;

    @media (max-width: 1101px) {
      font-size: 18px;
    }
  }
`;

export const Action = styled.div`
  @keyframes slide {
    0% {
      background-position: 200% 100%;
    }
    100% {
      background-position: 0 0;
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;
  height: 78px;
  max-width: 344px;
  border-image: linear-gradient(90deg, #105c86 1%, #00b5db 100%) 1 / 1px stretch;
  touch-action: manipulation;
  transition: all 0.2s ease;
  cursor: pointer;

  @media (max-width: 1101px) {
    height: 58px;
  }

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 21px;
    font-weight: 700;
    letter-spacing: 0em;
    font-family: 'open sans', sans-serif;
    text-transform: uppercase;
    padding: 0 20px;

    @media (max-width: 1101px) {
      font-size: 14px;
    }
  }

  &:hover {
    background: repeat padding-box border-box 0% 0% / auto auto scroll
      linear-gradient(270deg, rgba(104, 154, 222, 0.29) 0%, rgba(16, 92, 134, 0.29) 0%, rgba(0, 188, 255, 0.29) 100%);
    transition: all 0.2s ease;
  }

  &:active {
    background: linear-gradient(
      270deg,
      rgba(0, 188, 255, 0.29) 0% rgba(16, 182, 174, 0.29) 0%,
      rgba(0, 188, 255, 0.29) 100%
    );
    background-size: 200% 100%;
    animation: slide 500ms ease-in-out;
    transform: scale(0.9);
    transition: transform 750ms ease;
  }

  ::selection {
    background: none;
  }
`;

export const Container_Image = styled.div`
  position: relative;
  margin: 56px 0 0;
  z-index: 5;

  @media (max-width: 1101px) {
    display: none;
  }

  img:first-child {
    position: absolute;
    top: 24%;
    right: -200px;
    transform: rotate(199.16697493106471deg);
  }

  img:last-child {
    position: relative;
    z-index: 10;
  }
`;

export const Solutions = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Gradient = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fcfcfc;
`;

export const Title_Gradient = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 83px 0 55px;

  h2 {
    font-size: 34px;
    font-weight: 500;
    line-height: 140%;
    text-transform: uppercase;
    font-family: oswald-medium, oswald, sans-serif;
    background: linear-gradient(269deg, #11181c 20%, rgba(17, 24, 28, 0) 45%),
      linear-gradient(93deg, #3db5dd 2%, #24608b 17%, #3db4dd 30%);
    background-size: 300% 100%;
    background-clip: text;
    background-repeat: no-repeat;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 2;
    position: absolute;
    top: -7px;
    left: 0px;
  }

  h1 {
    font-size: 95.7891px;
    font-weight: 500;
    text-transform: uppercase;
    font-family: oswald-medium, oswald, sans-serif;
    background: linear-gradient(269deg, #11181c 20%, rgba(17, 24, 28, 0) 45%),
      linear-gradient(93deg, #3db5dd 2%, #24608b 15%, #3db4dd 30%);
    background-size: 300% 100%;
    background-clip: text;
    background-repeat: no-repeat;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 1;
    position: relative;
  }

  @media (max-width: 560px) {
    margin: 22px 0 10px;

    h2 {
      font-size: 17px;
    }

    h1 {
      font-size: 48px;
    }
  }
`;

export const Container_Share = styled.div`
  position: relative;

  img {
    position: absolute;
    top: auto;
    right: auto;
    left: 10px;
    width: 65px;

    @media (max-width: 560px) {
      bottom: -15px;
      width: 27px;
    }
  }
`;

export const Carrousel_Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 725px;
`;

export const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 83px 0 0;
  overflow: hidden;

  @media (max-width: 560px) {
    padding: 0 22px;
  }
`;

export const Absolute_Btn_Left = styled.div`
  position: absolute;
  left: 0;
  z-index: 10;
`;

export const Absolute_Btn = styled.div`
  position: absolute;
  right: 0;
  transform: rotate(-180deg);
  z-index: 10;
`;

export const Btn = styled.button`
  :hover {
    opacity: 0.7;
  }

  margin-left: 100px;

  @media (max-width: 560px) {
    margin-left: 30px;
  }
`;

export const Control = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  margin-bottom: 50px;
  z-index: 30;

  ol {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }

  li {
    margin: 0 7px;
    list-style-type: disc;
    color: rgba(138, 138, 138, 1);
    cursor: pointer;
  }

  .active {
    color: red;
    color: rgba(63, 67, 73, 1);
  }

  li:hover {
    opacity: 0.8;
  }
`;

export const Carrousel_Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Carrousel_Content = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: ${props => props.width};
  min-height: calc(725px - 83px);

  &.prev {
    background-color: red;
  }

  &.next {
    background-color: blue;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
  width: 100%;
  z-index: 2;
`;

export const Typography_Carrousel = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: #00b4db;
    font-size: 69px;
    font-family: 'open sans', sans-serif;

    @media (max-width: 560px) {
      font-size: 42px;
    }
  }

  p {
    color: #898989;
    font-size: 21px;

    @media (max-width: 560px) {
      font-size: 16px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 47px;
  padding: 0 26px;
  border: 2px solid #00afd3;

  backdrop-filter: blur(2px);
  box-shadow: 0px 7px 10px 3px #0000001a;
  background: hsla(0, 0%, 100%, 0.8);

  @media (max-width: 560px) {
    height: 42px;
  }

  a {
    color: #00b5db;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2rem;
    font-family: 'open sans', sans-serif;
    text-transform: uppercase;

    @media (max-width: 560px) {
      height: 14px;
    }
  }

  &:hover {
    background: repeat padding-box border-box 0% 0% / auto auto scroll
      linear-gradient(270deg, #689ade 0%, #105c86 0%, #00afd3 100%);

    a {
      color: #fff;
    }
  }

  ::selection {
    background: none;
  }
`;

export const Container_Banner = styled.div<{
  right?: string;
  left?: string;
  top?: string;
  topPng?: string;
  rightPng?: string;
  leftPng?: string;
}>`
  position: relative;
  z-index: 1;

  div {
    position: absolute;
    right: ${props => props.right};
    top: ${props => props.top};
    left: ${props => props.left};

    @media (max-width: 560px) {
      transform: scale(0.5);
      top: ${props => props.top};
      left: ${props => props.left};
    }

    img:first-child {
      position: relative;
      z-index: 2;
    }

    img:last-child {
      position: absolute;
      right: ${props => props.rightPng};
      top: ${props => props.topPng};
      left: ${props => props.leftPng};
      z-index: 1;
    }

    @media (max-width: 560px) {
      position: static;
    }
  }

  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Contact_Intro = styled.section`
  display: flex;
  justify-content: flex-end;
  min-height: 539px;
  background-blend-mode: multiply;
  background-image: url(${bg_fixed.src});
  background-clip: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 64px 0;
  padding: 0 26px;

  .row {
    display: flex;
    justify-content: center;
  }
`;

export const Typography_Contact = styled.div`
  max-width: 429px;

  h1 {
    color: #fff;
    font-size: 37px;
    line-height: 0.9em;
    font-weight: 400;
    font-family: 'open sans', sans-serif;
  }

  span {
    color: #00b4db;
    font-size: 37px;
    font-weight: 700;
    font-family: 'open sans', sans-serif;
    display: inline-block;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;

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
  height: 48px;
  padding: 0 32px;
  background-color: #00afd3;
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
    color: #ffffff;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-shadow: 0 0 6px #ffffffd9;
  }
`;
