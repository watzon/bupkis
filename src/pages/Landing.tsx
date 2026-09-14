import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import FeatureGrid from '../components/FeatureGrid'
import Comparison from '../components/Comparison'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Downloads from '../components/Downloads'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'
import CheckoutModal from '../components/CheckoutModal'
import './Landing.css'

export default function Landing() {
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  const openCheckout = () => setCheckoutOpen(true)
  const closeCheckout = () => setCheckoutOpen(false)

  return (
    <>
      <Header onGetBupkis={openCheckout} />
      <main>
        <Hero onGetBupkis={openCheckout} />
        <FeatureGrid />
        <Comparison />
        <Testimonials />
        <Downloads />
        <FAQ />
        <CtaBanner onGetBupkis={openCheckout} />
      </main>
      <Footer onGetBupkis={openCheckout} />
      <CheckoutModal isOpen={checkoutOpen} onClose={closeCheckout} />
    </>
  )
}
