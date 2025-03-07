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
        <meta name="keywords" content="logistics, shipping, transportation, global logistics, freight, Russia, CIS, CIS Logistics, CIS Logistics Companies, CIS Logistics Companies in Turkey, CIS Logistics Companies in Istanbul, CIS Logistics Companies in Ankara, CIS Logistics Companies in Izmir, CIS Logistics Companies in Russia, Transportation to Russia from Turkey, Transportation to CIS from Turkey, Transportation to CIS from Russia, Transportation to CIS from Russia from Turkey" />

        <link rel="canonical" href="https://www.hefmac.com" />
        <link rel="alternate" href="https://www.hefmac.com" hrefLang="tr" />
        <link rel="alternate" href="https://www.hefmac.com" hrefLang="en" />
        <link rel="alternate" href="https://www.hefmac.com" hrefLang="ru" />
        <link rel="alternate" href="https://www.hefmac.com" hrefLang="x-default" />
      </Helmet>

      <HeroSection />
      <ServicesSection />
    </>
  );
};

export default Home; 