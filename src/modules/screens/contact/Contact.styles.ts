import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(9vw);
  padding: 204.5px 0 104.5px;
  background-image: var(--bg_contact);

  @media (max-width: 1101px) {
    flex-direction: column;
  }

  @media (max-width: 560px) {
    padding: 154.5px 0 64.5px;
  }
`;

export const Outer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 65px;
  margin-bottom: 100px;

  @media (max-width: 1101px) {
    margin-bottom: 0;
  }
`;

export const HyperText = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: #fff;
    font-size: 28px;
    font-weight: 400;
    line-height: 1.2em;
    text-transform: uppercase;
    font-family: poppins, sans-serif;
  }

  h1 {
    color: rgb(0, 175, 211);
    font-size: 83px;
    font-weight: bold;
    line-height: 0.8em;
    text-transform: uppercase;
    font-family: poppins, sans-serif;
  }
`;

export const SubTitle = styled.div`
  width: 100%;
  max-width: 462px;

  h1 {
    color: #fff;
    font-size: 24px;
    font-weight: 200;
    line-height: 1.3em;
  }

  span {
    font-weight: 500;
    display: inline-block;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  width: 100%;
  max-width: 460px;
`;

export const Values = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const Action = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  height: 36px;
  background-color: rgba(0, 181, 219, 1);
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(16, 92, 134, 1);
    transition: background-color 0.3s ease;
    box-shadow: none;
  }

  &:active {
    transition: all 0.3s ease;
    transform: scale(0.9);
  }

  &:disabled {
    cursor: not-allowed;
    /* background-color: #e0e0e0; */
  }

  &:disabled:active {
    transform: scale(1);
  }

  &:not(&:disabled) {
    background-color: rgba(0, 181, 219, 1);
  }

  &:disabled p {
    /* color: #a6a6a6; */
  }

  p {
    color: rgba(250, 250, 250);
    font-size: 18px;
    text-transform: capitalize;
  }

  p::selection {
    background: none;
  }
`;

export const Local = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  margin-bottom: 100px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 1058px;
  width: 100%;
  gap: 40px;


  @media (max-width: 1101px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: rgb(16, 92, 134);
    font-size: 28px;
    font-weight: 400;
    text-transform: uppercase;
  }

  h1 {
    font-size: 83px;
    color: rgb(0, 160, 211);
    line-height: 0.7em;
    text-transform: uppercase;
  }
`;

export const Paragraph = styled.div`
  width: 100%;
  max-width: 462px;

  p {
    color: #105c86;
    font-size: 24px;
    font-weight: 200;
  }

  span {
    font-weight: 600;
    display: inline-block;
  }
`;

export const Maps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  @media (max-width: 1101px) {
    flex-direction: column;
  }
`;

export const Map = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  iframe {
    border: none;
    border-radius: 5px;
  }

  iframe:hover {
    box-shadow: 0px 4px 5px 0px #cccccc;
  }

  h1 {
    color: #105c86;
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;
