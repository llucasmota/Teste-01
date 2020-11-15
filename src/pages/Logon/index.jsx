import Header from '../../components/Header';
import InputComponent from '../../components/Input'
import {Container} from './styles'
import { FiMail, FiLock } from 'react-icons/fi'
import React, { useState } from 'react'

const Logon = () => {
  /**
   * Estados criados
   */
  const [inputMail, setInputMail] = useState('');
  const [inputPassword, setInputPassword] = useState('')
  const [show, setShow] = useState(false)
  const [name, setName] = useState('');


  function Login() {
    const newName = inputMail.split('@')
    if(newName.length < 2){
      setShow(false);
    }else{
    setName(newName)
    setShow(true);
  }
  }
  const handleInputMail = (e) => {
    e.preventDefault()
    setInputMail(e.target.value);
  }
  const handleInputPassword = (e) => {
    e.preventDefault()
    setInputPassword(e.target.value);
  }

  return (
    <>
      <Header show={show} key={"header-component"} name={name[0]} />
      <Container>
      <InputComponent
        Icon={FiMail}
        name="email"
        type="text"
        show={show}
        placeholder="Digite o email"
        onChange={handleInputMail}
      />
      <InputComponent
        Icon={FiLock}
        type="password"
        placeholder="Digite o password"
        onChange={handleInputPassword}
      />
       <button  onClick={Login}>
        Logar
            </button>
      </Container>
     
    </>
  );
}

export default Logon;