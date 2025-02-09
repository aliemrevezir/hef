import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { styled, alpha } from '@mui/material/styles';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import MemoryIcon from '@mui/icons-material/Memory';
import FactoryIcon from '@mui/icons-material/Factory';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  backgroundColor: '#fff',
  borderRadius: '24px',
  transition: 'all 0.3s ease-in-out',
  border: '1px solid',
  borderColor: alpha('#e3e3e3', 0.2),
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '20px',
  backgroundColor: '#e3e3e3',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  transition: 'all 0.3s ease',
  '& svg': {
    fontSize: '40px',
    color: '#333',
    transition: 'all 0.3s ease',
  },
  '&:hover': {
    transform: 'rotate(10deg)',
    backgroundColor: '#333',
    '& svg': {
      color: '#e3e3e3',
      transform: 'scale(1.1)',
    },
  },
}));

const FeatureList = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  '& .feature-item': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1.5),
    '& svg': {
      marginRight: theme.spacing(1.5),
      color: '#333',
      fontSize: '20px',
    },
  },
}));

const Services = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  const services = [
    { icon: LocalShippingIcon, ...t('services.main.logistics', { returnObjects: true }) },
    { icon: PrecisionManufacturingIcon, ...t('services.main.mechanical', { returnObjects: true }) },
    { icon: MemoryIcon, ...t('services.main.electronic', { returnObjects: true }) },
    { icon: FactoryIcon, ...t('services.main.industrial', { returnObjects: true }) },
  ];

  const whyChooseUs = t('services.why.items', { returnObjects: true });

  return (
    <>
      <Helmet>
        <title>{t('services.hero.title')} - {t('footer.company')}</title>
        <meta name="description" content={t('services.hero.description')} />
        <meta name="keywords" content="logistics services, mechanical production, electronic manufacturing, industrial solutions, global trade" />
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: '#e3e3e3',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #333 0%, rgba(51,51,51,0.3) 100%)',
          },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              align="center"
              sx={{
                fontWeight: 700,
                color: '#333',
                fontSize: { xs: '2.5rem', md: '4rem' },
                mb: 2,
                letterSpacing: '-0.5px',
              }}
            >
              {t('services.hero.title')}
            </Typography>
            <Typography
              variant="h4"
              align="center"
              sx={{
                color: '#555',
                fontSize: { xs: '1.5rem', md: '2rem' },
                mb: 3,
                fontWeight: 500,
              }}
            >
              {t('services.hero.subtitle')}
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                color: '#666',
                fontSize: { xs: '1rem', md: '1.25rem' },
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              {t('services.hero.description')}
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <StyledCard>
                  <CardContent sx={{ p: 4 }}>
                    <IconWrapper>
                      <service.icon />
                    </IconWrapper>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        color: '#333',
                        fontSize: { xs: '1.75rem', md: '2rem' },
                        letterSpacing: '-0.5px',
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#666',
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        mb: 3,
                      }}
                    >
                      {service.description}
                    </Typography>
                    <FeatureList>
                      {service.features.map((feature: string, idx: number) => (
                        <Box key={idx} className="feature-item">
                          <CheckCircleIcon />
                          <Typography variant="body1" sx={{ color: '#555' }}>
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </FeatureList>
                  </CardContent>
                </StyledCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us Section */}
      <Box
        sx={{
          bgcolor: '#e3e3e3',
          py: { xs: 8, md: 12 },
          position: 'relative',
        }}
        ref={ref}
      >
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: '#333',
                mb: 6,
                fontSize: { xs: '2rem', md: '3rem' },
                letterSpacing: '-0.5px',
              }}
            >
              {t('services.why.title')}
            </Typography>
            <Grid container spacing={3}>
              {whyChooseUs.map((item: any, index: number) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    <StyledCard sx={{ textAlign: 'center', p: 3 }}>
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          color: '#333',
                          mb: 2,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#666',
                          fontSize: '1.1rem',
                          lineHeight: 1.6,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </StyledCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default Services;