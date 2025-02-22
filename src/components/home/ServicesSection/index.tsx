import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CableIcon from '@mui/icons-material/Cable';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import mekanik from '../../../assets/images/mekanik.jpg';
import lojistik from '../../../assets/images/lojistik.webp';
import elektronik from '../../../assets/images/elektronik.webp';
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '24px',
  backgroundColor: '#fff',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '1px solid',
  borderColor: alpha('#e3e3e3', 0.2),
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: '0 22px 40px rgba(0, 0, 0, 0.1)',
    '& .MuiCardMedia-root': {
      transform: 'scale(1.1)',
    },
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '72px',
  height: '72px',
  borderRadius: '20px',
  backgroundColor: '#e3e3e3',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  transition: 'all 0.3s ease',
  '& svg': {
    fontSize: '36px',
    color: '#333',
    transition: 'all 0.3s ease',
  },
  '&:hover': {
    transform: 'rotate(5deg)',
    backgroundColor: '#333',
    '& svg': {
      color: '#e3e3e3',
      transform: 'scale(1.1)',
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: 'auto',
  textTransform: 'none',
  borderRadius: '12px',
  padding: '12px 28px',
  fontSize: '16px',
  fontWeight: 600,
  backgroundColor: '#e3e3e3',
  color: '#333',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#333',
    color: '#e3e3e3',
    '& .MuiSvgIcon-root': {
      transform: 'translateX(6px)',
    },
  },
  '& .MuiSvgIcon-root': {
    transition: 'transform 0.3s ease',
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: '240px',
  transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
});

const StyledCardContent = styled(CardContent)({
  padding: '32px',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

const ServicesSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: LocalShippingIcon,
      title: t('home.services.cards.logistic.title'),
      description: t('home.services.cards.logistic.description'),
      image: lojistik,
      link: "/logistics-services"
    },
    {
      icon: PrecisionManufacturingIcon,
      title: t('home.services.cards.mechanicalProduction.title'),
      description: t('home.services.cards.mechanicalProduction.description'),
      image: mekanik,
      link: "/mechanical-services"
    },
    {
      icon: CableIcon,
      title: t('home.services.cards.electronicProduction.title'),
      description: t('home.services.cards.electronicProduction.description'),
      image: elektronik,
      link: "/electronical-services"
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        background: 'linear-gradient(180deg, #fff 0%, #f8f9fa 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(180deg, rgba(227,227,227,0.1) 0%, rgba(227,227,227,0) 100%)',
        },
      }}
      ref={ref}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <Typography
            component="h2"
            variant="h3"
            align="center"
            sx={{
              mb: 3,
              fontWeight: 700,
              color: '#333',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              letterSpacing: '-0.5px',
            }}
          >
            {t('home.services.title')}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 10,
              maxWidth: '800px',
              mx: 'auto',
              color: 'text.secondary',
              fontSize: { xs: '1rem', md: '1.25rem' },
              lineHeight: 1.6,
            }}
          >
            {t('home.services.description')}
          </Typography>

          <Grid container spacing={4}>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    <StyledCard>
                      <StyledCardMedia
                        image={service.image}
                        title={service.title}
                      />
                      <StyledCardContent>
                        <IconWrapper>
                          <Icon />
                        </IconWrapper>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h3"
                          sx={{
                            fontWeight: 700,
                            fontSize: '1.5rem',
                            mb: 2,
                            color: '#333',
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                          mb: 4,
                          color: 'text.secondary',
                          fontSize: '1.1rem',
                          lineHeight: 1.6,
                          }}
                        >
                          {service.description}
                        </Typography>
                        <StyledButton
                          onClick={() => navigate(service.link)}
                          endIcon={<ArrowForwardIcon />}
                        >
                          {t('common.buttons.readMore')}
                        </StyledButton>
                      </StyledCardContent>
                    </StyledCard>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServicesSection; 