import About from './about1';
import About1 from './about2';
import About2 from './about3';

export default function Home() {
  return (
    <div className="home-page bg-[#efebe7]">
      {/* Hero Section */}
      <About/>
      <About1/>
      <About2/>
    </div>
  );
}
