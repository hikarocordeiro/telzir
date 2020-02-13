import React from 'react';

import { FaPhoneSquare } from 'react-icons/fa';

import { Container } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <FaPhoneSquare /> Telzir
    </Container>
  )
}

export default Header;
