import React, { useState } from 'react';
import { Container } from './styles';
import Display from '../../molecules/Display';
import ButtonsContainer from '../../molecules/ButtonsContainer';
interface CalculatorProps {
  className?: string;
}

const Calculator: React.FC<CalculatorProps> = ({ className }) => {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  return (
    <Container
      className={`calculator ${className || ''}`}
    >
      <Display pressedKeys={pressedKeys} setPressedKeys={setPressedKeys} />
      <ButtonsContainer pressedKeys={pressedKeys} setPressedKeys={setPressedKeys}/>
    </Container>
  );
};

export default Calculator;
