import Section1 from '../components/organism/MainPage/Section1';
import Section2 from '../components/organism/MainPage/Section2';
import { Divider } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Section1 />
      <Divider />
      <Section2 />
      <Divider />
    </div>
  );
}
