import Footer from "../components/Footer"
import HowItWorks from "../components/HowItWorks"
import ImpactBanners from "../components/ImpactBanners"
import InitiativesGrid from "../components/InititativeGrid"
import JoinCommunity from "../components/JoinCommunity"
import LandingNav from "../components/LandingNav"
import LandingHero from "../components/Landinghero"
import PartnerBanner from "../components/PartnerBanner"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <div>
      <LandingNav />
      <LandingHero />
      <PartnerBanner />
      <InitiativesGrid/>
      <ImpactBanners/>
      <HowItWorks/>
      <JoinCommunity/>
      <Testimonials/>
      <Footer/>

    </div>
  )
}

export default Home