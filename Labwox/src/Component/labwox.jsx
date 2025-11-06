import Hero from './Hero';
import Hero1 from './chemx3';;
import Hero2 from './chemx2';
import Hero3 from './labwox3';
import Hero4 from './labwox4';

export default function Home() {
  return (
    <div className="home-page bg-[#efebe7]">
      {/* Hero Section */}
      <Hero />
      <Hero2 />
      <Hero1 />
      <Hero4 />
      <Hero3 />
    </div>
  );
}
