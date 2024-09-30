import  Navbar from '../components/navbar'
import  Hero  from '../components/hero'
import  Mission  from '../components/mission'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <Mission />
      </div>
    </main>
  );
}
