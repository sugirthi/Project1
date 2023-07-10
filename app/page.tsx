import { Homepage } from '@/components/home'
import { SecurityLayers } from '@/components/securitylayers';
import { Why_abluva } from '@/components/why_abluva';
import { NextPage } from 'next';
import React from 'react';
import ParallaxScroll from '../components/ParallaxScroll';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <>
    <div>
      <Homepage/>      
      <Why_abluva/>
      <SecurityLayers/>
      <ParallaxScroll layer1Id="layer1" layer2Id="layer2" layer3Id="layer3" layer4Id="layer4"/>   
    </div>   
    </>
  );
};

export default HomePage;

