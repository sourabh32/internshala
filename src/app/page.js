

import CaseStudies from "@/components/CaseStudies";
import Clients from "@/components/Clients";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";


export default function Home() {
  return (
    <main className="w-full">
      <Hero />
    <CaseStudies />
     <Clients />
     <Services />
     <Feature />
     <Footer/>
    </main>
  )
}
