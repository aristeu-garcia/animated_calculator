import React from 'react'
import Input from '../../atoms/Input';
import { Container } from './styles';
interface DisplayProps {
  pressedKeys: string[];
  setPressedKeys: Function;
  onClick?: () => void;
  className?: string;
}

const Display: React.FC<DisplayProps> = ({ pressedKeys, setPressedKeys, onClick, className }) => {
  return (
    <Container>
      <Input name='input-display' />

    </Container>
  )
}
export default Display