import React from 'react';
import { Outlet } from 'react-router-dom';
import { Section, NavCss, NavlinkCss } from './navigation.styled';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from 'Redux/user/authSelector';

const Navigation = () => {
  const authenticated = useSelector(selectAuthenticated);

  return (
    <div>
      <Section>
        <NavCss>
          <NavlinkCss to="/">Home</NavlinkCss>
          {authenticated && (
            <>
              <NavlinkCss to="/register">Register</NavlinkCss>
              <NavlinkCss to="/login">Login</NavlinkCss>
            </>
          )}
        </NavCss>
      </Section>
      <Outlet />
    </div>
  );
};

export default Navigation;
