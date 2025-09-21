import Hero from './chemx';
import Hero1 from './chemx1';
import Hero2 from './chemx2';



export default function Home() {
  return (
    <div className="home-page ">
      {/* Hero Section */}
      <Hero />
      <Hero2 />
      <Hero1 />
    </div>
  );
}