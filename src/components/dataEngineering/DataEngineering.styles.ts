import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fbfbfb;
  min-height: 437px;

  @media (max-width: 560px) {
    min-height: inherit;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 87px;
  width: 100%;

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    margin: 49px 0 0;
    padding: 0 2rem;
  }

  @media (max-width: 560px) {
    margin: 41px 0 46px;
    gap: 27px;

    img {
      max-width: 159px;
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
    color: #105c86;
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
    a {
      color: #105c86;
      font-weight: 700;
    }
  }

  .action:hover .btn a  {
    color: #fff;
  }
`;
