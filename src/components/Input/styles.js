import styled from 'styled-components';


export const Container = styled.div`
height: 40px;
align-items: center;
border-radius: 10px;
border: 2px solid #666360;
padding-bottom: 2px;

    input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #666360;
    outline: 0;
    padding-right: 10px;

 
  }
  & + div {
    margin-top: 8px;
  }
svg{
  margin-right: 10px;
  margin-left:8px;
  margin-top: 5px;

}
    &::placeholder {
    color: #666360;
  }

`;