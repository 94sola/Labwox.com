import Hero from './Hero';
import Hero1 from './labwox2';
import Hero2 from './labwoxs';
import Hero3 from './labwox3';
import Hero4 from './about3';
import Hero5 from './partner';



export default function Home() {
  return (
    <div className="home-page bg-[#efebe7]">
      <Hero />
      <Hero4/>
      <Hero2 />
      <Hero1 />
      <Hero3 />
      <Hero5/>
    </div>
  );
}
