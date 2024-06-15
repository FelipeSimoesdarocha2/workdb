import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  min-height: 511px;

  @media (max-width: 560px) {
    min-height: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;

  @media (max-width: 1101px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  @media (max-width: 790px) {
    align-items: center;
    padding: 0 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 466px;
  margin: 77px 0 0;
  width: 100%;

  @media (max-width: 1101px) {
    margin: 25px 0 0;
  }

  @media (max-width: 560px) {
    gap: 21px;
    align-items: center;
  }

  .action a {
    color: #00b4db;
    font-weight: bold;

    @media (max-width: 560px) {
      font-size: 12px;
    }
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 560px) {
    gap: 1px;
  }

  h1 {
    color: #105c86;
    font-size: 33px;
    line-height: 1em;
    letter-spacing: 0em;
    font-family: 'poppins', sans-serif;

    @media (max-width: 560px) {
      font-size: 20px;
      max-width: 250px;
    }
  }

  p {
    color: #7a7a7a;
    font-size: 20px;
    line-height: 1.8em;
    font-family: 'open sans', sans-serif;

    @media (max-width: 560px) {
      font-size: 15px;
      text-align: justify;
      padding-left: 12px;
    }
  }
`;

export const Container_Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 456px;

  img:first-child {
    position: absolute;
    top: 200px;
    bottom: auto;
    right: auto;
    left: -160px;

    @media (max-width: 560px) {
      max-width: 280px;
      left: auto;
      top: 20px;
    }
  }

  img:last-child {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0px;

    @media (max-width: 1101px) {
      position: relative;
    }

    @media (max-width: 560px) {
      max-width: 299px;
    }
  }
`;
