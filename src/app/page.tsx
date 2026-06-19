import HeroVideo from '@/components/home/HeroVideo'
import IntroSection from '@/components/home/IntroSection'
import KultSection from '@/components/home/KultSection'
import VorteilsSection from '@/components/home/VorteilsSection'
import KuehnenShowcase from '@/components/home/KuehnenShowcase'
import MaterialsSection from '@/components/home/MaterialsSection'
import FaqSection from '@/components/home/FaqSection'
import PortfolioPreview from '@/components/home/PortfolioPreview'
import ProductionSlider from '@/components/home/ProductionSlider'
import BenefitsSection from '@/components/home/BenefitsSection'
import ProcessSection from '@/components/home/ProcessSection'

import KonfiguratorForm from '@/components/home/KonfiguratorForm'

export default function Home() {
  return (
    <>
      <HeroVideo />
      <IntroSection />
      <KultSection />
      <VorteilsSection />
      <KuehnenShowcase />
      <MaterialsSection />
      <FaqSection />
      <PortfolioPreview />
      <ProductionSlider />
      <BenefitsSection />
      <ProcessSection />
      <section className="uk-section" style={{ background: '#f7f6f4' }}>
        <div className="uk-container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--primary-color)', marginBottom: '0.6rem' }}>
              Online-Konfigurator
            </p>
            <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', margin: '0 0 1rem' }}>
              Küchenplanung online
            </h2>
            <p style={{ color: 'var(--muted-color)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>
              Konfigurieren Sie Ihre Traumküche in wenigen Schritten und erhalten Sie ein unverbindliches Angebot von unserem Designerteam.
            </p>
          </div>
          <KonfiguratorForm compact />
        </div>
      </section>
    </>
  )
}
