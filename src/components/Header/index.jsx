import React from 'react';
import logo from '../../logo.svg'
import {HeaderComponent} from './styles'
import {FcUnlock}from 'react-icons/fc';

const Header = ({show, name })=>{
  return (
      <HeaderComponent>
      <FcUnlock size={60} />
        {show && <h1>{`Bem vindo ${name}`}</h1>}
      </HeaderComponent>
  )
}

export default Header;