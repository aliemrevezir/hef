import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';

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

  const services = [
    {
      title: 'Road Transportation',
      description: 'Efficient and reliable road transportation services across Europe and Asia.',
      icon: LocalShippingIcon,
    },
    {
      title: 'Air Freight',
      description: 'Fast and secure air freight services for time-sensitive cargo.',
      icon: FlightIcon,
    },
    {
      title: 'Sea Freight',
      description: 'Cost-effective sea freight solutions for international shipping.',
      icon: DirectionsBoatIcon,
    },
    {
      title: 'Warehousing',
      description: 'Modern warehousing facilities with advanced inventory management.',
      icon: WarehouseIcon,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('common.navigation.services')} - {t('footer.company')}</title>
        <meta name="description" content="Explore HEFMAC Global's comprehensive logistics and transportation services." />
      </Helmet>

      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 6, md: 10 },
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            {t('common.navigation.services')}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ opacity: 0.9 }}
          >
            Comprehensive Logistics Solutions for Your Business
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Box
          ref={ref}
          component={motion.div}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <Grid container spacing={4}>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        transition: 'transform 0.3s ease-in-out',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        p: 3,
                        display: 'flex',
                        justifyContent: 'center',
                        bgcolor: 'primary.main',
                        color: 'white',
                      }}
                    >
                      <Icon sx={{ fontSize: 40 }} />
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {service.title}
                      </Typography>
                      <Typography>
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          <Box sx={{ mt: 8 }}>
            <Typography variant="h4" gutterBottom align="center">
              Why Choose Us?
            </Typography>
            <Grid container spacing={4} sx={{ mt: 2 }}>
              {[
                'Global Network',
                'Expert Team',
                '24/7 Support',
                'Custom Solutions',
                'Real-time Tracking',
                'Cost Efficiency',
              ].map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    sx={{
                      p: 3,
                      height: '100%',
                      border: 1,
                      borderColor: 'divider',
                      borderRadius: 2,
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6">
                      {feature}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Services; 