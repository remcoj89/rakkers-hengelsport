import Button from '@/ui/compontents/button/button.component';
import Styles from './hero-section.module.css';

const HeroSection = () => {
  return (
    <div className={Styles.heroSection}>
      <div className={Styles.heroWrapper}>
          <h1 className={Styles.heroTitle}>Jouw Perfecte Visdag Begint Hier</h1>
          <span className={Styles.heroSubtitle}>Alles Wat Je Nodig Hebt voor Succes aan het Water</span>
          <div className={Styles.ctaButtons}>
            <Button buttonStyle='btnPrimary'>Click</Button>
            <Button buttonStyle='btnSecondary'>Click</Button>
          </div>
      </div>
    </div>
  )
}

export default HeroSection;
