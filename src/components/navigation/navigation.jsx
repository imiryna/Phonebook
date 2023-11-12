import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Section,
  NavCss,
  NavlinkCss,
  LoginBoxCss,
  UserTextCss,
  ButtonCss,
} from './navigation.styled';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAuthenticated,
  selectUserData,
  selectToken,
} from 'Redux/user/authSelector';
import { logoutThunk } from 'Redux/user/authThunk';

const Navigation = () => {
  const authenticated = useSelector(selectAuthenticated);
  const currentUser = useSelector(selectUserData);
  const currentToken = useSelector(selectToken);
  const dispatcher = useDispatch();

  const handleLogout = () => {
    dispatcher(logoutThunk(currentToken));
  };

  return (
    <div>
      <Section>
        <NavCss>
          <NavlinkCss to="/">Home</NavlinkCss>
          {!authenticated ? (
            <>
              <NavlinkCss to="/register">Register</NavlinkCss>
              <NavlinkCss to="/login">Login</NavlinkCss>
            </>
          ) : (
            <LoginBoxCss>
              <UserTextCss>Hello, {currentUser.name}</UserTextCss>
              <ButtonCss onClick={handleLogout}>Logout</ButtonCss>
            </LoginBoxCss>
          )}
        </NavCss>
      </Section>
      <Outlet />
    </div>
  );
};

export default Navigation;
