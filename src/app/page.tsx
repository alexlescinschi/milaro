import HeroVideo from '@/components/home/HeroVideo'
import IntroSection from '@/components/home/IntroSection'
import PopularProducts from '@/components/home/PopularProducts'
import MainSlider from '@/components/home/MainSlider'
import CatalogPreview from '@/components/home/CatalogPreview'
import PortfolioPreview from '@/components/home/PortfolioPreview'
import AdvantagesSection from '@/components/home/AdvantagesSection'
import CompanyInfo from '@/components/home/CompanyInfo'

export default function Home() {
  return (
    <>
      <HeroVideo />
      <IntroSection />
      <PopularProducts />
      <MainSlider />
      <CatalogPreview />
      <PortfolioPreview />
      <AdvantagesSection />
      <CompanyInfo />
    </>
  )
}
