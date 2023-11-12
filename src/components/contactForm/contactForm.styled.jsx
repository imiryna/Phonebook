import styled from '@emotion/styled';

export const Text = styled.h1`
  margin-top: 40px;
  margin-left: 40px;
`;

export const TitleCss = styled.p`
  color: rgba(5, 25, 55, 1);
  font-size: 20px;
  font-weight: 500;
`;

export const ContactFormCss = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  font-weight: 500;
  background-color: #dfeff5;
  border: 1px solid rgba(5, 25, 55, 1);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  margin-top: 20px;
  margin-left: 44px;
`;

export const Description = styled.label`
  display: block;
  margin-bottom: 8px;
  flex-direction: column;
  margin-bottom: 16px;
  color: rgba(5, 25, 55, 1);
  font-size: 20px;
`;

export const InputFormCss = styled.input`
  display: block;
  width: 220px;
  height: 40px;
  padding: 12px;
  box-sizing: border-box;
  margin-bottom: 20px;
  border: 2px solid #dfeff5;
  border-radius: 5px;

  /* margin-top: 10px;
  padding: 6px 10px;
  border: none;
  border: 2px solid #dfeff5;
  border-radius: 5px;
  font: inherit;
  cursor: pointer; */

  &:focus {
    outline: none;
    border: 2px solid #e88606;
    background-color: #fff;
  }
`;

export const ButtonCss = styled.button`
  padding: 8px 10px;
  font: inherit;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid transparent;
  color: #fff;
  font-size: 20px;
  background: rgba(5, 25, 55, 1);
  transition: all 250ms;

  &:hover,
  &:focus {
    background-image: linear-gradient(
      90deg,
      rgba(27, 163, 196, 1) 66%,
      rgba(5, 25, 55, 1) 100%
    );
    color: #fff;
    border: 1px solid #dcd5d5;
    cursor: pointer;
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
      0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  }
`;
