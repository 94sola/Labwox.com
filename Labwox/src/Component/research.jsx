import Hero from './collaborative';
import Hero1 from './collaborative1';
import Hero2 from './collaborative2';



export default function Home() {
  return (
    <div className="home-page bg-[#efebe7]">
      <Hero />
      <Hero1/>
      <Hero2 />
    </div>
  );
}
