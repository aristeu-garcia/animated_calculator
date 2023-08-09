import React, { InputHTMLAttributes } from 'react';
import { StyledInput } from './styles';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}
const Input: React.FC<InputProps> = ({ name }) => {
  return (
    <StyledInput name={name} />
  )
}
export default Input