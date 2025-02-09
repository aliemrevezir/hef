import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('sending');

    const form = event.currentTarget;
    try {
      await emailjs.sendForm(
        'service_lttx4qc',
        'template_j861ay1',
        form,
        'IT8cAk2-mACQuYoFo'
      );
      setFormStatus('success');
      form.reset();
    } catch (error) {
      setFormStatus('error');
      console.error('Error sending email:', error);
    }
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: t('footer.phone'),
      content: '+90 (212) XXX XX XX',
    },
    {
      icon: EmailIcon,
      title: t('footer.email'),
      content: 'info@hefmacglobal.com',
    },
    {
      icon: LocationOnIcon,
      title: t('footer.address'),
      content: 'Istanbul, Turkey',
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('common.navigation.contact')} - {t('footer.company')}</title>
        <meta name="description" content="Contact HEFMAC Global for logistics and transportation solutions." />
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
            {t('common.navigation.contact')}
          </Typography>

          <Grid container spacing={6} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="First Name"
                      name="firstName"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Last Name"
                      name="lastName"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Subject"
                      name="subject"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      disabled={formStatus === 'sending'}
                    >
                      {formStatus === 'sending'
                        ? 'Sending...'
                        : t('common.buttons.sendMessage')}
                    </Button>
                    {formStatus === 'success' && (
                      <Typography color="success" sx={{ mt: 2 }}>
                        Message sent successfully!
                      </Typography>
                    )}
                    {formStatus === 'error' && (
                      <Typography color="error" sx={{ mt: 2 }}>
                        Error sending message. Please try again.
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </form>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Grid item xs={12} key={index}>
                      <Card>
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Icon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                            <Box>
                              <Typography variant="h6" gutterBottom>
                                {info.title}
                              </Typography>
                              <Typography color="text.secondary">
                                {info.content}
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>

              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Business Hours
                </Typography>
                <Typography color="text.secondary" paragraph>
                  Monday - Friday: 9:00 - 18:00
                </Typography>
                <Typography color="text.secondary">
                  Saturday - Sunday: Closed
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </>
  );
};

export default Contact; 