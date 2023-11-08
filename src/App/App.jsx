import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from 'components/navigation/navigation';

const Home = lazy(() => import('pages/homePage/homePage'));
const Login = lazy(() => import('pages/loginPage'));
const Register = lazy(() => import('pages/registerPage/registerPage'));
const Contacts = lazy(() => import('pages/contactsPage'));

export const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/" element={<Contacts />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
