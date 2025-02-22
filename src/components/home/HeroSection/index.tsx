import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import hero images
import hero1 from '../../../assets/images/imagesOptimized/lojistik_banner.webp';
import hero2 from '../../../assets/images/imagesOptimized/mekanik_banner.webp';
import hero3 from '../../../assets/images/imagesOptimized/elektronik_banner.webp';

const StyledSwiper = styled(Swiper)({
  width: '100%',
  height: 'calc(100vh - 80px)', // Navbar height is 80px
  '& .swiper-slide': {
    position: 'relative',
  },
  '& .swiper-pagination-bullet': {
    width: '12px',
    height: '12px',
    backgroundColor: '#fff',
    opacity: 0.5,
    transition: 'all 0.3s ease',
    '&-active': {
      opacity: 1,
      transform: 'scale(1.2)',
      backgroundColor: '#e3e3e3',
    },
  },
  '& .swiper-button-prev, & .swiper-button-next': {
    color: '#fff',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(8px)',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    transition: 'all 0.3s ease',
    '&:after': {
      fontSize: '24px',
    },
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.3)',
      transform: 'scale(1.1)',
    },
    '&:active': {
      transform: 'scale(0.95)',
    },
  },
});

const SlideContent = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
  display: 'flex',
  alignItems: 'center',
  color: '#fff',
  transition: 'all 0.5s ease',
});

const ContentWrapper = styled(Box)({
  maxWidth: '800px',
  padding: '0 20px',
  '@media (max-width: 600px)': {
    padding: '0 16px',
  },
});

const SlideImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#e3e3e3',
  color: '#333',
  padding: '12px 32px',
  fontSize: '16px',
  fontWeight: 500,
  textTransform: 'none',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '#fff',
  },
  marginRight: theme.spacing(2),
  '@media (max-width: 600px)': {
    padding: '10px 24px',
    fontSize: '14px',
  },
}));

const HeroSection = () => {
  const { t } = useTranslation();

  const slides = [
    {
      image: hero1,
      title: t('home.hero.title'),
      subtitle: t('home.hero.subtitle'),
      description: t('home.hero.description'),
      link: "/logistics-services",
    },
    {
      image: hero2,
      title: t('home.mechanicalProduction.title'),
      subtitle: t('home.mechanicalProduction.subtitle'),
      description: t('home.mechanicalProduction.description'),
      link:"/mechanical-services",
    },
    {
      image: hero3,
      title: t('home.electronicProduction.title'),
      subtitle: t('home.electronicProduction.subtitle'),
      description: t('home.electronicProduction.description'),
      link:"/electronical-services",
    },
  ];

  return (
    <Box sx={{ position: 'relative' }}>
      <StyledSwiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        navigation
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 6000, // Increased from 5000 to 6000
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000} // Increased from default
        loop
        fadeEffect={{
          crossFade: true
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: 'easeOut' }}
            >
              <SlideImage src={slide.image} alt={slide.title} />
            </motion.div>
            <SlideContent>
              <Container maxWidth="lg">
                <ContentWrapper>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: { xs: '2.5rem', md: '4rem' },
                        fontWeight: 700,
                        mb: 2,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        letterSpacing: '0.5px',
                        lineHeight: 1.2,
                      }}
                    >
                      {slide.title}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        mb: 3,
                        textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                        fontWeight: 500,
                        letterSpacing: '0.3px',
                        lineHeight: 1.4,
                      }}
                    >
                      {slide.subtitle}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '1rem', md: '1.2rem' },
                        mb: 4,
                        maxWidth: '600px',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                        lineHeight: 1.6,
                        letterSpacing: '0.2px',
                        fontWeight: 400,
                      }}
                    >
                      {slide.description}
                    </Typography>
                    <Box sx={{ mt: 4 }}>
                      <StyledButton variant="contained" href={slide.link}>
                        {t('common.buttons.learnMore')}
                      </StyledButton>
                      <StyledButton href="/contact"
                        variant="outlined" 
                        sx={{ 
                          borderColor: '#fff', 
                          color: '#fff',
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          '&:hover': {
                            borderColor: '#fff',
                            color: '#fff',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                          }
                        }}
                      >
                        {t('common.buttons.contact')}
                      </StyledButton>
                    </Box>
                  </motion.div>
                </ContentWrapper>
              </Container>
            </SlideContent>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Box>
  );
};

export default HeroSection;