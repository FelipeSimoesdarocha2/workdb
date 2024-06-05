import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(16, 92, 134);
  min-height: 431px;

  @media (max-width: 560px) {
    min-height: inherit;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 1100px) {
    flex-direction: column;
    margin: 49px 0 0;
    padding: 0 2rem;
  }

  @media (max-width: 560px) {
    margin: 41px 0 46px;

    img {
      max-width: 150px;
    }
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: 560px) {
    align-items: center;
  }

  h1 {
    color: #00b5db;
    font-size: 30px;
    font-weight: 600;
    line-height: 0.8em;
    letter-spacing: normal;
    font-family: 'poppins', sans-serif;

    @media (max-width: 560px) {
      font-size: 20px;
    }
  }

  p {
    color: #fafafa;
    font-size: 18px;
    line-height: 1.8em;
    letter-spacing: 0em;
    font-family: 'open sans', sans-serif;
    max-width: 402px;

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }
  .action {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 39px;

    @media (max-width: 560px) {
      margin: 0 0 26px;
    }
  }

  .action .btn {
    max-width: 161px;
  }
`;
