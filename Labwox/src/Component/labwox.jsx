import Hero from './Hero';
import Hero1 from './labwox2';
import Hero2 from './labwoxs';
import Hero3 from './labwox3';
//import Hero4 from './labwox4';
import About2 from './about3';
import About4 from './partner';



export default function Home() {
  return (
    <div className="home-page bg-[#efebe7]">
      <Hero />
      <About2/>
      <Hero2 />
      <Hero1 />
      <Hero3 />
      <About4/>
    </div>
  );
}
