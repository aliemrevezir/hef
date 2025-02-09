import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();

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
        <title>{t('common.navigation.about')} - {t('footer.company')}</title>
        <meta name="description" content="Learn about HEFMAC Global's history, mission, and values." />
      </Helmet>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            {t('common.navigation.about')}
          </Typography>

          <Grid container spacing={6} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Our Story
              </Typography>
              <Typography paragraph>
                HEFMAC Global was founded with a vision to revolutionize the logistics industry
                through innovative solutions and exceptional service. Our journey began with a
                commitment to reliability, efficiency, and customer satisfaction.
              </Typography>
              <Typography paragraph>
                Today, we are proud to serve clients worldwide, providing comprehensive logistics
                solutions that meet the evolving needs of modern businesses.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Our Mission
              </Typography>
              <Typography paragraph>
                Our mission is to deliver excellence in global logistics through innovative
                solutions, reliable service, and sustainable practices. We strive to be the
                preferred partner for businesses seeking efficient and reliable logistics solutions.
              </Typography>
              <Typography paragraph>
                We are committed to continuous improvement, environmental responsibility, and
                creating value for our clients, employees, and stakeholders.
              </Typography>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8 }}>
            <Typography variant="h4" gutterBottom align="center">
              Our Values
            </Typography>
            <Grid container spacing={4} sx={{ mt: 2 }}>
              {[
                {
                  title: 'Excellence',
                  description: 'We strive for excellence in everything we do.',
                },
                {
                  title: 'Innovation',
                  description: 'We embrace innovation to improve our services.',
                },
                {
                  title: 'Reliability',
                  description: 'We are committed to being a reliable partner.',
                },
                {
                  title: 'Sustainability',
                  description: 'We prioritize sustainable practices in our operations.',
                },
              ].map((value, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box
                    sx={{
                      p: 3,
                      height: '100%',
                      border: 1,
                      borderColor: 'divider',
                      borderRadius: 2,
                      '&:hover': {
                        boxShadow: 3,
                      },
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {value.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </>
  );
};

export default About; 