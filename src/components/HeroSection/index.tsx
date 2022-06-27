import './styles.css'

interface HeroSectionProps {
  children: React.ReactNode
}

const HeroSection = ({ children }: HeroSectionProps) => (
  <div className="hero-section">
    <img alt="background" className="2xl:absolute 2xl:w-screen 2xl:-top-52 hidden md:block" src="bg.svg"/>
    <img alt="background" className="block md:hidden" src="bg-phone.png"/>
    <div>
        {children}
    </div>
  </div>
)

export default HeroSection