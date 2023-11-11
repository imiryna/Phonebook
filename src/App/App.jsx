import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from 'components/navigation/navigation';

import { useSelector } from 'react-redux';
import { selectAuthenticated } from 'Redux/user/authSelector';

const Home = lazy(() => import('pages/homePage'));
const Login = lazy(() => import('pages/loginPage'));
const Register = lazy(() => import('pages/registerPage'));
const Contacts = lazy(() => import('pages/contactsPage'));

export const App = () => {
  const authed = useSelector(selectAuthenticated);
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route
              path="/register"
              element={authed ? <Navigate replace to="/" /> : <Register />}
            />
            <Route
              path="/login"
              element={authed ? <Navigate replace to="/" /> : <Login />}
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
