import HeroSection from '../components/home/HeroSection'
import Services from '../components/home/Services'
import Happy from '../components/home/Happy'
import Customers from '../components/home/Customers'
import Intouch from '../components/home/Intouch'
import Map from "../components/home/Map"
import FilterSection from '../components/home/FilterSection'


function Home() {
  return (
    <div>
       <HeroSection/>
       <Customers/>
       <FilterSection/>
       <Services/>
      <Happy/>
      <Intouch/>
      <Map/>
     
    </div>
  )
}

export default Home
