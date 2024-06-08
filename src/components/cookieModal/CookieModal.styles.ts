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
  width: 571px;
  height: 100%;
  max-height: 600px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  box-shadow: -8px -7px 20px 0 rgba(0, 0, 0, .1);


    width: 80%;
    height: 571px;
    max-width: 600px;
    max-height: 80%;
    padding: 0;
`;

export const Header = styled.div`
  padding: 24px 0 24px 24px;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 24px;
  font-weight: normal;
  line-height: 1.33;
  font-family: 'HelveticaNeue', 'Helvetica Neue', 'helvetica', 'Sans-Serif';
`;
export const Close = styled.button``;

export const Content = styled.div``;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  padding: 24px 0 24px 24px;;
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



