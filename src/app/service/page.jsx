import React from 'react';
import ServiceTop from '../../components/service/ServiceTop';
import ServiceBody from '../../components/service/ServiceBody';
import img1 from '/public/images/detservices/1.jpg'

export default function Home() {

  return (
    <>
      <ServiceTop img={img1} title="Ummrah Services" />
      <ServiceBody />
    </>
  );
}
