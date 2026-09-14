import Header from '../components/Header'
import Hero from '../components/Hero'
import FeatureGrid from '../components/FeatureGrid'
import Comparison from '../components/Comparison'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Downloads from '../components/Downloads'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'
import './Landing.css'

export default function Landing() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureGrid />
        <Comparison />
        <Testimonials />
        <Downloads />
        <FAQ />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
