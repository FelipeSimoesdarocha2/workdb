import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 600px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
  box-shadow: -8px -7px 20px 0 rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0 24px 24px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 24px;
  font-weight: normal;
  line-height: 1.33;
  font-family: 'HelveticaNeue', 'Helvetica Neue', 'helvetica', 'Sans-Serif';
`;

export const Sub_Title = styled.h1`
  color: #000;
  font-size: 12px;
  font-weight: normal;
  line-height: 1.33;
  font-family: 'HelveticaNeue', 'Helvetica Neue', 'helvetica', 'Sans-Serif';
`;

export const Close = styled.button``;

export const Content = styled.div`
  overflow: auto;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0 24px 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h1 {
    color: #000;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.33;
    font-family: 'HelveticaNeue', 'Helvetica Neue', 'helvetica', 'Sans-Serif';
  }

  p {
    color: #000;
    font-size: 12px;
    font-weight: normal;
    line-height: 1.33;
    font-family: 'HelveticaNeue', 'Helvetica Neue', 'helvetica', 'Sans-Serif';
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 24px;

  border-top: 1px solid rgba(0, 0, 0, 0.1);

  button {
    height: 32px;
    min-width: 55px;
    padding: 0 16px 0 16px;
    margin: 6px;
    overflow: hidden;
    border: solid 1px #000;
    background-color: #000;
    cursor: pointer;
  }

  button p {
    color: #fff;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: normal;
    text-align: center;
    font-family: 'HelveticaNeue', 'Helvetica Neue', 'helvetica', 'Sans-Serif';
    display: inline-block;
    white-space: nowrap;
  }
`;
