import Hero from './Hero';
import Hero1 from './labwox1';
import Hero2 from './labwox2';
import Hero3 from './labwox3';
import Hero4 from './labwox4';

export default function Home() {
  return (
    <div className="home-page bg-[#efebe7]">
      {/* Hero Section */}
      <Hero />
      <Hero4 />
      <Hero1 />
      <Hero2 />
      <Hero3 />
    </div>
  );
}
