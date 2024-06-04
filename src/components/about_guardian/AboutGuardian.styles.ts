import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  z-index: 100;
  position: relative;
  min-height: 549px;
  background-color: #fafafa;

  @media (max-width: 1101px) {
    flex-direction: column;
    padding: 0 2rem 0;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1101px) {
    margin-top: 24px;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 53px;

  @media (max-width: 560px) {
    gap: 21px;
  }

  h1 {
    color: #105c86;
    font-weight: 200;
    font-size: 33px;
    line-height: 1em;
    letter-spacing: normal;
    font-family: 'poppins', sans-serif;

    @media (max-width: 560px) {
      font-size: 21px;
    }
  }

  h1 strong {
    color: #00b4db;
    font-weight: 600;
    font-size: 30px;
  }

  h1:first-child {
    @media (max-width: 560px) {
      strong {
        font-size: 21px;
      }
    }
  }

  h1:last-child {
    font-size: 30px;

    @media (max-width: 560px) {
      font-size: 18px;
      max-width: 270px;

      strong {
        font-size: 18px;
      }
    }
  }

  p {
    color: rgb(138, 138, 138);
    font-size: 20px;
    line-height: 1.8em;
    letter-spacing: 0em;
    font-family: 'open sans', sans-serif;
    max-width: 598px;

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }
`;

export const Container_Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  width: 100%;
  max-width: 317px;

  @media (max-width: 1101px) {
    max-width: none;
  }

  img {
    position: absolute;
    top: -51px;

    @media (max-width: 1101px) {
      position: static;
    }

    @media (max-width: 560px) {
      max-width: 220px;
    }
  }
`;
