import React from 'react';
import { ContactForm } from 'components/contactForm/contactForm';
import { Text } from 'components/contactForm/contactForm.styled';
import { ContactList } from 'components/contactList/contactList';
import { Filter } from 'components/filter/filter';
import { Container } from 'pages/homePage.styled';
import { Loader } from 'components/loader/loader';
import { useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'Redux/selectors';

export const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <Container>
        {error && <p>Whoops, something went wrong: {error}</p>}
        <ContactForm />
        <Text>Contacts</Text>
        {contacts && contacts?.length > 0 && <Filter />}
        {isLoading && <Loader />}
        <ContactList />
      </Container>
    </>
  );
};

export default ContactsPage;
