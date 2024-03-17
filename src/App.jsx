
import './App.css'
import Navbar from './component/Navbar'
import HeroBanner from './component/HeroSection'
import Helped from './component/Helped'
import Team from './component/Team'
import Accessible from './component/Accessible'
import ServiceTab from './component/ServiceTab'
import Bussiness from './component/Bussiness'
import Together from './component/Together'
import Footer from './component/Footer'
import Frequently from './component/Frequently'

function App() {
  

  return (
    <>
     <header>
      <Navbar/>
     </header>
     <main>
      <HeroBanner/>
      <Helped/>
      <Team/>
      <Accessible/>
      <ServiceTab/>
      <Bussiness/>
      <Frequently/>
      <Together/>
     </main>
     <Footer/>
    </>
  )
}

export default App
