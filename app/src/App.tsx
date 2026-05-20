import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Timeline } from '@/components/sections/Timeline';
import { Demo } from '@/components/sections/Demo';
import { Results } from '@/components/sections/Results';
import { Comparison } from '@/components/sections/Comparison';
import { Guarantee } from '@/components/sections/Guarantee';
import { OtherAgents } from '@/components/sections/OtherAgents';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Timeline />
      <Demo />
      <Results />
      <Comparison />
      <Guarantee />
      <OtherAgents />
      <FinalCTA />
      <Footer />
    </div>
  );
}
