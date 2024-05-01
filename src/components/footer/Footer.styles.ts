import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #235c88;
  min-height: 281px;

  @media (max-width: 750px) {
    padding: 32px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  width: 100%;


  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Wrraper = styled.div`
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;

  @media (max-width: 1101px) {
    justify-content: center;
  }

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Pages = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: #dbdbdb;
    font-size: 15px;
    text-transform: capitalize;
  }

  a:hover {
    color: #fff;
    transition:
      all 0.2s ease,
      visibility;
  }


  @media (max-width: 750px) {
    a {
      text-align: center;
    }
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1101px) {
    flex-direction: row;
  }

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Network = styled.div`
  display: flex;
  gap: 8px;
`;

export const About = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Typography = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;

  h2 {
    color: #fafafa;
    font-size: 23px;
    line-height: 0.8em;
    font-weight: 400;
  }

  h1 {
    color: #00b5db;
    font-size: 33px;
    line-height: 0.8em;
  }
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 37px;
  border-top-right-radius: 18px;
  border-bottom-left-radius: 18px;
  border: 1px solid #00afd3;
  box-shadow: 0 0 6px rgb(0, 175, 211);
  transition:
    all 0.2s ease,
    visibility;

  &:hover {
    background: rgb(0, 175, 211);
    transition:
      all 0.2s ease,
      visibility;
  }

  a {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Local = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 750px) {
    align-items: center;
  }

  a:first-child p {
    color: #dbdbdb;
    font-size: 15px;
    font-weight: 600;
    font-family:
      open sans,
      sans-serif;
  }

  a p {
    color: #dbdbdb;
    font-size: 15px;
    font-weight: 400;
    transition:
      all 0.2s ease,
      visibility;
      text-transform: capitalize;
  }

  a p:hover {
    color: #fff;
    transition:
      all 0.2s ease,
      visibility;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #dbdbdb;
  font-size: 15px;

  a {
    color: #dbdbdb;
    font-size: 15px;
    line-height: 1.7em;
    text-decoration: underline;
    font-family:
      open sans,
      sans-serif;
    transition:
      all 0.2s ease,
      visibility;
      text-transform: capitalize;
  }

  a:hover {
    color: #fff;
    transition:
      all 0.2s ease,
      visibility;
  }
`;
