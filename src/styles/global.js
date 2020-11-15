import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  box-sizing:border-box;
  padding: 0;
  margin:0;
}
html, body {
  box-sizing:boder-box;
  padding: 0;
  margin:0;
  background: #219ebc;
}
body, input, button{
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
}
button{
  cursor: pointer
}
`;