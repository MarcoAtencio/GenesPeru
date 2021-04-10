import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  margin-top: 45px;
  margin-bottom: 30px;
  font-size: 40px;
`;
export const Container = styled.div`
  width: 90vw;
  display: grid;
  margin: 30px auto;
  grid-template-columns: 1fr;
  @media screen and (min-width: 48em) {
    grid-template-columns: 1fr 1fr;
  }
`;
