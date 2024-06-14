import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(16, 92, 134);
  min-height: 378px;

  @media (max-width: 1101px) {
    min-height: 320px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 200px;
  position: relative;
  width: 100%;
  background: rgb(16, 92, 134);

  @media (max-width: 1101px) {
    flex-direction: column-reverse;
    margin: 30px 0 0;
    gap: 12px;
  }

  @media (max-width: 560px) {
    margin: 30px 0 28px;
  }
`;

export const Container_Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;

  .contact_mobile {
    display: none;
  }

  @media (max-width: 1101px) {
    width: 100%;
    min-height: 413px;
  }

  @media (max-width: 850px) {
    overflow: hidden;
  }

  @media (max-width: 560px) {
    flex-direction: column;
    min-height: 270px;

    .contact_mobile {
      display: flex;
    }
  }

  img:first-child {
    position: absolute;
    bottom: auto;
    right: auto;
    left: -160px;

    @media (max-width: 1101px) {
      bottom: 0;
      left: auto;
    }

    @media (max-width: 560px) {
      max-width: 446px;
      top: 30px;
    }
  }

  .opportunities {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;

    @media (max-width: 1101px) {
      left: auto;
      right: auto;
    }

    @media (max-width: 560px) {
      max-width: 270px;
      position: relative;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 10px;
  border-radius: 22px;

  @media (max-width: 1101px) {
    flex-direction: column;
    padding: 0 10px;
  }

  @media (max-width: 560px) {
    align-items: flex-start;
    gap: 12px;

    .contact_desktop {
      display: none;
    }
  }
`;

export const Title = styled.div`
  z-index: 2;

  @media (max-width: 560px) {
    max-width: 285px;
    padding-left: 22px;
  }

  h1 {
    color: #fafafa;
    font-size: 23px;
    font-weight: 400;
    line-height: 0.8em;
    font-family: 'poppins', sans-serif;

    @media (max-width: 560px) {
      font-size: 18px;
    }
  }

  span {
    color: #00b4db;
    font-size: 23px;
    font-weight: bold;
    line-height: 0.8em;
    font-family: 'poppins', sans-serif;
    display: inline-block;

    @media (max-width: 560px) {
      font-size: 18px;
    }
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  z-index: 2;

  @media (max-width: 560px) {
    gap: 20px;
  }

  p {
    color: #fafafa;
    font-size: 20px;
    font-weight: 400;
    font-family: 'poppins', sans-serif;

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }

  a {
    color: #00b4db;
    font-size: 20px;
    font-family: 'poppins', sans-serif;
    display: inline-block;
    padding: 0 4px;

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }

  a:hover {
    opacity: 0.9;
  }
`;
