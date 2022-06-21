import Head from 'next/head';
import Container from 'components/UI/Container/Container';
import SearchArea from 'containers/Home/Search/Search';
import { getDeviceType } from 'library/helpers/get-device-type';

import WhyChoose from 'components/WhyChoose';
import TopHotels from 'components/TopHotels/TopHotels';
import Ambitions from '../components/Ambitions/Ambitions';
import React from 'react';

export default function HomePage({ deviceType }) {
  return (
    <>
      <Head>
        <title>Reservations Center </title>
      </Head>
      <Container>
        <SearchArea />
        <WhyChoose />
        <TopHotels deviceType={deviceType} />
        <Ambitions />
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;

  const deviceType = getDeviceType(req);

  return {
    props: { deviceType },
  };
}
