import './App.css'
import About from './components/About'
import Approach from './components/Approach'
import Clients from './components/Client'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import MissionValues from './components/MissionValues'
import Services from './components/Services'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  return (
    <>
    <Hero/>
    <About/>
    <Approach/>
    <Services/>
    <HowItWorks/>
    <WhyChooseUs/>
    <MissionValues/>
    <Clients/>
    <Testimonials/>
    <Team/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
