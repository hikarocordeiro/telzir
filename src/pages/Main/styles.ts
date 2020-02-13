import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;

  margin: 80px auto;
`;

export const Form = styled.form`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  flex: 1;

  select, input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 5px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #048BA8;
  color: #FFF;
  font-weight: bold;

  border: 0;
  padding: 10px 15px;
  border-radius: 4px;
`;

export const Plan = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 30px;

  font-weight: bold;
  font-size: 16px;
`;

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
