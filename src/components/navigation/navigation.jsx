import React from 'react';
import { Outlet } from 'react-router-dom';
import { Section, NavCss, NavlinkCss } from './navigation.styled';
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
            <>
              <button onClick={handleLogout}>Logout</button>
              <p>Hello, {currentUser.name}</p>
            </>
          )}
        </NavCss>
      </Section>
      <Outlet />
    </div>
  );
};

export default Navigation;
