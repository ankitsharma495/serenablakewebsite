import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Therapy from "../components/Therapy"
import AreasOfFocus from "../components/AreasOfFocus"
import RatesInsurance from "../components/RatesInsurance"
import Quote from "../components/Quote"
import FAQ from "../components/FAQ"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3f0e8] text-[#333333] overflow-x-hidden">
      <Header />
      <Hero/>
      <About />
      <Therapy/>
      <AreasOfFocus />
      <RatesInsurance />
      <Quote />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
