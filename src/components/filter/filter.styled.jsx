import styled from '@emotion/styled';

export const FilterCont = styled.div`
  margin-bottom: 15px;

  margin-top: 15px;
  width: 600px;
  column-gap: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.label`
  display: inline-block;
  margin-left: 44px;
  color: rgba(5, 25, 55, 1);
  font-size: 20px;
  font-weight: 500;
`;

export const Input = styled.input`
  display: block;
  width: 370px;
  padding: 8px;
  margin: 15px 0 10px;
  border-radius: 5px;
  border: none;
  border: 3px solid #dfeff5;
  font-size: 20px;

  &:focus {
    outline: none;
    border: 3px solid #e88606;
  }
`;
