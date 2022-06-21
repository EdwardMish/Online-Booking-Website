import Head from 'next/head';
import Container from 'components/UI/Container/Container';
import Banner from 'containers/FAQ/Banner';
import FaqBody from '../containers/FAQ/FaqBody';

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>Reservations Center | FAQ </title>
      </Head>
      <Container>
        <Banner />
        <FaqBody />
      </Container>
    </>
  );
}
