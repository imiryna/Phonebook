import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormCss = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  font-weight: 500;
  background-color: #ecf4f8;
  border: 1px solid #666563;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  margin-top: 40px;
`;
export const InputCss = styled.input`
  margin-top: 15px;
  margin-right: 20px;
  padding: 6px 10px;
  border: none;
  border: 2px solid #dfeff5;
  border-radius: 5px;
  font: inherit;
  cursor: pointer;

  &:focus {
    outline: none;
    border: 2px solid #e88606;
    background-color: #fff;
  }
`;
export const LabelCss = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: rgba(5,25,55,1);
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 8px 10px;
  font: inherit;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid transparent;
  color: #cfcaca;
  font-size: 20px;
  background-image: linear-gradient(31deg, rgba(27,163,196,1) 0%, rgba(5,25,55,1) 41%);

  &:hover,
  &:focus {
    color: #fff;
    border: 1px solid #dcd5d5;
    cursor: pointer;
  }
`;