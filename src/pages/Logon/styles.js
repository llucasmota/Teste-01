import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.div`
display: flex;
flex-direction: column;
width:100%;
height: 300px;
padding-top: 5px;
align-items: center;
button{
  border:0;
  outline:0;
  width: 240px;
  height: 40px;
  margin-top: 10px;
  color: #312e38;
  background-color: #ffb703;
  border-radius: 10px;
  font-weight: 500;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#fb8500')};
  }

}
`;