import Section1 from '../components/organism/MainPage/Section1';
import Section2 from '../components/organism/MainPage/Section2';
import Section3 from '../components/organism/MainPage/Section3';
import Section4 from '../components/organism/MainPage/Section4';
import { Divider } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Section1 />
      <Divider />
      <Section2 />
      <Divider />
      <Section3 />
      <Divider />
      <Section4 />
      <Divider />
    </div>
  );
}
