import Head from 'next/head';
import Container from 'components/UI/Container/Container';
import Terms from '../containers/Terms/terms';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Reservations Center | Terms </title>
      </Head>
      <Container>
        <Terms />
      </Container>
    </>
  );
}
