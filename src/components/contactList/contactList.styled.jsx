import styled from '@emotion/styled';

export const ContactListCss = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 12px;
  border-radius: 8px;
  background-color: #dfeff5;
  border: 1px solid rgba(5, 25, 55, 1);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  list-style: none;
  margin-left: 44px;
  margin-bottom: 20px;
`;

export const Items = styled.li`
  background-color: #fff;
  border: 2px solid #dfeff5;
  padding: 6px;
  border-radius: 8px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
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
