import bg_view from 'assets/pages/about/bg_view.webp';

import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 305px;
  overflow: hidden;

  @media (max-width: 1101px) {
    gap: 20px;
  }

  .line_top_left {
    position: absolute;
    left: -352px;
    bottom: 0;
    right: auto;
    top: -16px;
    max-width: 290px;
    max-height: 173px;
    width: 100%;
    height: 100%;
    border: 2px solid #fff;
    border-radius: 0px 30px 0px 30px;
  }

  .line_left {
    position: absolute;
    left: -475px;
    bottom: 0;
    right: auto;
    top: 105px;
    max-width: 339px;
    max-height: 202px;
    width: 100%;
    height: 100%;
    border: 2px solid rgb(0 181 219);
    border-radius: 0px 30px 0px 30px;
  }

  .line_top_right {
    position: absolute;
    left: auto;
    bottom: 0;
    right: -506px;
    top: -20px;
    max-width: 339px;
    max-height: 173px;
    width: 100%;
    height: 100%;
    border: 2px solid #fff;
    border-radius: 0px 30px 0px 30px;
  }

  .line_right {
    position: absolute;
    left: auto;
    bottom: 0;
    right: -286px;
    top: 115px;
    max-width: 194px;
    max-height: 202px;
    width: 100%;
    height: 100%;
    border: 2px solid rgb(0 181 219);
    border-radius: 0px 30px 0px 30px;
  }

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
    radial-gradient(circle at 6.165364583333333% 12.617187499999998%, #105c86 0%, 42%, rgba(16, 92, 134, 0) 70%),
    radial-gradient(circle at 93.6865234375% 11.42578125%, #00afd3 0%, 42%, rgba(0, 175, 211, 0) 70%),
    radial-gradient(circle at 48.9013671875% 49.521484375%, #141416 0%, 100%, rgba(20, 20, 22, 0) 100%);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: relative;
`;

export const Title = styled.div`
  h2 {
    color: #fafafa;
    font-size: 29px;
    margin-top: 60px;
    font-style: italic;
    font-family: 'poppins', sans-serif;
  }

  span {
    color: #00afd3;
    font-size: 29px;
    display: inline-block;
    font-family: 'poppins', sans-serif;
  }
`;

export const Itens = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 200px;

  @media (max-width: 1101px) {
    flex-wrap: wrap;
    gap: 100px;
    margin: 20px 0 50px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
  }

  h1 {
    color: #00b5db;
    font-size: 74px;
    line-height: 1.1em;
    font-style: italic;
    font-family: 'poppins', sans-serif;
  }

  span {
    color: #fafafa;
    font-size: 74px;
    font-weight: bold;
    line-height: 1.1em;
    font-style: italic;
    font-family: 'poppins', sans-serif;
  }

  p {
    color: #fafafa;
    font-size: 15px;
    font-weight: bold;
    line-height: 1.1em;
    font-style: italic;
    font-family: 'poppins', sans-serif;
  }
`;
