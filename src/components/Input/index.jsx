import React from 'react';
import {Container} from './styles'

const InputComponent = ({Icon, ...rest}) => {
  return (
    <Container>
    {Icon && <Icon size={20}/>}
      <input
        {...rest}
      />
      </Container>
  );
};

export default InputComponent;
