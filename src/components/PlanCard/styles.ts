import styled from 'styled-components';

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #eee;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.div`
  background: #C62E65;
  color: #fff;
  flex: 1;
  padding: 30px;
  border-radius: 4px;
`;

export const Price = styled.div`
  text-align: center;
  padding: 30px;
  background: #fff;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;
