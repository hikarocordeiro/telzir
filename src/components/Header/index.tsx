import React from 'react';

import { FaPhoneSquare } from 'react-icons/fa';

import { Container } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <span>
        <FaPhoneSquare /> &nbsp;Telzir
      </span>
    </Container>
  )
}

export default Header;
