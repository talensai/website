import  Navbar from '../components/navbar'
import  Hero  from '../components/hero'
import  Mission  from '../components/mission'
import  HowItWorks  from '../components/howitworks'
import  Footer  from '../components/footer'
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <Mission />
        <HowItWorks />
      </div>
      <Footer />
    </main>
  );
}
