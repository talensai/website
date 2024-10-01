import  Navbar from '../components/navbar'
import  Hero  from '../components/hero'
import  Mission  from '../components/mission'
import  HowItWorks  from '../components/howitworks'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <Mission />
        <HowItWorks />
      </div>
    </main>
  );
}
