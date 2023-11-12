import React from 'react';
import { Container, Title, Text } from 'pages/homePage.styled';
import { ContactsPage } from 'pages/contactsPage';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from 'Redux/user/authSelector';

const HomePage = () => {
  const authed = useSelector(selectAuthenticated);

  return (
    <Container>
      <Title>phonebook</Title>
      {authed ? <ContactsPage /> : <Text>all your contacts in one place</Text>}
    </Container>
  );
};

export default HomePage;
