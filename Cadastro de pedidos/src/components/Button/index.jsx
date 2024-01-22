import React from 'react';
import {Button as MeuButton} from './styles'

/* function Button({onClick, children, isBlack}){ */
function Button({children, ...props}){
  return(
   /*  <MeuButton isBlack={isBlack} onClick={onClick}>{children}</MeuButton> */
    <MeuButton {...props}>{children}</MeuButton>
  )
}

export default Button;