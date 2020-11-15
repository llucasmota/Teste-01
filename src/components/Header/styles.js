import styled from 'styled-components'

export const HeaderComponent = styled.header`
  display: flex;
  flex-direction: column;
  height: 200px;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  margin: 5px 10px 5px 10px ;
  border: 2px solid #8ecae6;
  border-radius: 10px;
  h1{
    padding-left: 5px;
    padding-right: 5px;
    max-width: 80%;
    max-width: 23ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
 
;
`;