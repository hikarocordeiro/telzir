import styled from 'styled-components';

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
