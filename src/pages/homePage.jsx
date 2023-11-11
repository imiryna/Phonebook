import React from 'react';

import { Container, Title, Text } from 'pages/homePage.styled';

import { ContactsPage } from 'pages/contactsPage';

const HomePage = () => {
  return (
    <Container>
      <Title>phonebook</Title>
      <Text>all your contacts in one place</Text>
      <ContactsPage />
    </Container>
  );
};

export default HomePage;
