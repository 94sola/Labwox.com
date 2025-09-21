import Hero from './chemx';
import Hero1 from './chemx1';
import Hero2 from './chemx2';
import Hero3 from './chemx3';
import Hero4 from './chemx4';
import Hero5 from './chemx5';



export default function Home() {
  return (
    <div className="home-page ">
      {/* Hero Section */}
      <Hero />
      <Hero2 />
      <Hero4 /> 
      <Hero5 />
      <Hero3 />
      <Hero1 />
      
    </div>
  );
}