import React from 'react';
import Container from 'components/UI/Container/Container';
import Privacy from '../containers/Privacy/Privacy';
import Head from 'next/head';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Reservations Center | Terms </title>
      </Head>
      <Container>
        <Privacy />
      </Container>
    </>
  );
}
