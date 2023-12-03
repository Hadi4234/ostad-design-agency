import Feature from '@/components/Feature';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Subscribe from '@/components/Subscribe';
import WorkList from '@/components/WorkList';

export default function Home() {
  return (
    <>
      <Hero />
      <WorkList />
      <Stats />
      <Feature />
      <Subscribe />
    </>
  );
}
