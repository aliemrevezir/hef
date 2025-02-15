import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

import { useInView } from 'react-intersection-observer';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';

const Home = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>{t('home.hero.title')} - {t('footer.company')}</title>
        <meta name="description" content={t('home.hero.description')} />
        <meta name="keywords" content="logistics, shipping, transportation, global logistics, freight" />
      </Helmet>

      <HeroSection />
      <ServicesSection />
    </>
  );
};

export default Home; 