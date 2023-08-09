import React from 'react';
import { Container } from './styles';
import Button from '../../atoms/Button';

interface ButtonsContainerProps {
  pressedKeys: string[];
  setPressedKeys: Function;
  className?: string;
}
const calculatorKeys: string[] = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  '+', '-', '*', '/', '=', 'C', 'AC', '.',
];
const ButtonsContainer: React.FC<ButtonsContainerProps> = ({ pressedKeys, setPressedKeys, className }) => {
  return (
    <Container
      className={`calculator ${className || ''}`}
    >
      {
        calculatorKeys.map(key => (
          <Button>{key}</Button>
        ))
      }
    </Container>
  );
};

export default ButtonsContainer;
