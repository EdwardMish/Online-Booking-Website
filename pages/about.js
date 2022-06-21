import Head from 'next/head';
import Container from 'components/UI/Container/Container';
import Banner from 'containers/About/Banner';
import { getDeviceType } from 'library/helpers/get-device-type';
import WhyChoose from 'components/WhyChoose';
import AboutWrapper from 'containers/About/AboutWrapper';
import Bottom from '../containers/About/Bottom';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Reservations Center | About </title>
      </Head>
      <Container>
        <Banner />
        <AboutWrapper />
        <Bottom />
        <WhyChoose />
      </Container>
    </>
  );
}
