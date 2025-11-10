import Hero from './mdv1';
import Hero1 from './mdv2';
import Hero2 from './mdv3';



export default function Home() {
  return (
    <div className="home-page bg-[#efebe7]">
      <Hero />
      <Hero1/>
      <Hero2/>
    </div>
  );
}
