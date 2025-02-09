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
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
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

interface ValueItem {
  icon: React.ComponentType;
  title: string;
  description: string;
}

const About = () => {
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

  const values: ValueItem[] = [
    { icon: StarIcon, ...t('about.values.quality', { returnObjects: true }) as any },
    { icon: SpeedIcon, ...t('about.values.innovation', { returnObjects: true }) as any },
    { icon: SecurityIcon, ...t('about.values.reliability', { returnObjects: true }) as any },
    { icon: AllInclusiveIcon, ...t('about.values.sustainability', { returnObjects: true }) as any },
  ];

  return (
    <>
      <Helmet>
        <title>{t('about.content.title')} - {t('footer.company')}</title>
        <meta name="description" content={t('about.content.mainText')} />
        <meta name="keywords" content="hefmac global, international trade, manufacturing, logistics, quality solutions" />
      </Helmet>

      {/* Mission & Vision Section */}
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
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '120px',
            background: 'linear-gradient(to bottom, transparent, #fff)',
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontWeight: 700,
              color: '#333',
              mb: 8,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              letterSpacing: '-0.5px',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                backgroundColor: '#333',
                borderRadius: '2px',
              },
            }}
          >
            HEFMAC Global
          </Typography>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <StyledCard sx={{ height: '100%', p: 4 }}>
                  <IconWrapper sx={{ mb: 3 }}>
                    <RocketLaunchIcon />
                  </IconWrapper>
                  <Typography 
                    variant="h3" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700, 
                      color: '#333',
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      letterSpacing: '-0.5px',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-8px',
                        left: '0',
                        width: '60px',
                        height: '3px',
                        backgroundColor: '#e3e3e3',
                        borderRadius: '1.5px',
                      },
                    }}
                  >
                    {t('about.mission.title')}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#555', 
                      lineHeight: 1.8,
                      mt: 3,
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      fontWeight: 400,
                    }}
                  >
                    {t('about.mission.description')}
                  </Typography>
                </StyledCard>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <StyledCard sx={{ height: '100%', p: 4 }}>
                  <IconWrapper sx={{ mb: 3 }}>
                    <VisibilityIcon />
                  </IconWrapper>
                  <Typography 
                    variant="h3" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700, 
                      color: '#333',
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      letterSpacing: '-0.5px',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-8px',
                        left: '0',
                        width: '60px',
                        height: '3px',
                        backgroundColor: '#e3e3e3',
                        borderRadius: '1.5px',
                      },
                    }}
                  >
                    {t('about.vision.title')}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#555', 
                      lineHeight: 1.8,
                      mt: 3,
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      fontWeight: 400,
                    }}
                  >
                    {t('about.vision.description')}
                  </Typography>
                </StyledCard>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Content Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: '#333',
              mb: 6,
            }}
          >
            {t('about.content.title')}
          </Typography>

          <Box sx={{ mb: 8 }}>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
              {t('about.content.mainText')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
              {t('about.content.secondaryText')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
              {t('about.content.thirdText')}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555', fontWeight: 500 }}>
              {t('about.content.conclusion')}
            </Typography>
          </Box>

          {/* Values Section */}
          <Box sx={{ mt: 10 }}>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              sx={{ fontWeight: 700, color: '#333', mb: 6 }}
            >
              {t('about.values.title')}
            </Typography>
            <Grid container spacing={4}>
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <motion.div
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    >
                      <StyledCard>
                        <CardContent sx={{ p: 4 }}>
                          <IconWrapper>
                            <Icon />
                          </IconWrapper>
                          <Typography
                            variant="h5"
                            gutterBottom
                            sx={{ fontWeight: 600, color: '#333' }}
                          >
                            {value.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ color: '#666', lineHeight: 1.6 }}
                          >
                            {value.description}
                          </Typography>
                        </CardContent>
                      </StyledCard>
                    </motion.div>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </>
  );
};

export default About; 