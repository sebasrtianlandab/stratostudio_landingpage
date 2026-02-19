import {
  Navigation,
  Hero,
  VSLSection,
  Problem,
  FiveStages,
  Services,
  InterventionLevels,
  Differentiator,
  FinalCTA,
} from './components/sections'

export default function App() {
  return (
    <div className="min-h-screen bg-background font-['Space_Grotesk',sans-serif]">
      <Navigation />
      <Hero />
      <VSLSection />
      <Problem />
      <FiveStages />
      <Services />
      <InterventionLevels />
      <Differentiator />
      <FinalCTA />
    </div>
  )
}
