import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Helmet } from 'react-helmet-async';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#e3e3e3',
  color: '#333',
  padding: '12px 32px',
  fontSize: '16px',
  fontWeight: 500,
  textTransform: 'none',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
  marginRight: theme.spacing(2),
  '@media (max-width: 600px)': {
    padding: '10px 24px',
    fontSize: '14px',
  },
}));

const ServiceLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const NotFound = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('common.navigation.logisticsServices'),
      path: '/logistics-services',
    },
    {
      title: t('common.navigation.mechanicalServices'),
      path: '/mechanical-services',
    },
    {
      title: t('common.navigation.electronicalServices'),
      path: '/electronical-services',
    },
  ];

  return (
    <>
    <Helmet>
        <title>Page Not Found - Hefmac</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Sorry, the page you are looking for does not exist." />
    </Helmet>
    
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: 'calc(100vh - 200px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          py: 8,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '6rem', md: '8rem' },
              fontWeight: 700,
              color: '#e3e3e3',
              textAlign: 'center',
              mb: 2,
            }}
          >
            404
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              mb: 4,
              color: '#333',
            }}
          >
            {t('notFound.title')}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: '#666',
              maxWidth: '600px',
            }}
          >
            {t('notFound.description')}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <StyledButton
            href="/"
            variant="contained"
            sx={{ mb: 4 }}
          >
            {t('notFound.backToHome')}
          </StyledButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mb: 3,
              color: '#333',
            }}
          >
            {t('notFound.exploreServices')}
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            {services.map((service) => (
              <Grid item key={service.path}>
                <ServiceLink to={service.path}>
                  {service.title}
                </ServiceLink>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Container>
    </>
  );
};

export default NotFound; 