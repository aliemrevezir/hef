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
import { styled, alpha } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import emailjs from '@emailjs/browser';

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
  width: '56px',
  height: '56px',
  borderRadius: '16px',
  backgroundColor: '#e3e3e3',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: theme.spacing(3),
  transition: 'all 0.3s ease',
  '& svg': {
    fontSize: '28px',
    color: '#333',
    transition: 'all 0.3s ease',
  },
  '&:hover': {
    backgroundColor: '#333',
    transform: 'rotate(10deg)',
    '& svg': {
      color: '#e3e3e3',
    },
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: alpha('#fff', 0.6),
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: alpha('#fff', 0.8),
    },
    '&.Mui-focused': {
      backgroundColor: '#fff',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#333',
      },
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '12px',
  padding: '12px 32px',
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
  backgroundColor: '#333',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#000',
  },
}));

const Contact = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('sending');

    const form = event.currentTarget;
    try {
      const result = await emailjs.sendForm(
        'service_lttx4qc',
        'template_j861ay1',
        form,
        'IT8cAk2-mACQuYoFo'
      );

      if (result.status === 200) {
        setFormStatus('success');
        form.reset();
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: LocationOnIcon,
      title: t('contact.info.address.title'),
      content: t('contact.info.address.content'),
    },
    {
      icon: PhoneIcon,
      title: t('contact.info.phone.title'),
      content: t('contact.info.phone.content'),
    },
    {
      icon: EmailIcon,
      title: t('contact.info.email.title'),
      content: t('contact.info.email.content'),
    },
    {
      icon: AccessTimeIcon,
      title: t('contact.info.workingHours.title'),
      content: (
        <>
          {t('contact.info.workingHours.weekdays')}
          <br />
          {t('contact.info.workingHours.weekend')}
        </>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('contact.hero.title')} - {t('footer.company')}</title>
        <meta name="description" content={t('contact.hero.description')} />
        <meta name="keywords" content="contact, get in touch, business inquiries, customer support, global logistics" />
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
              {t('contact.hero.title')}
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
              {t('contact.hero.subtitle')}
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
              {t('contact.hero.description')}
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Form & Info Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <StyledCard sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    color: '#333',
                    mb: 4,
                    fontSize: { xs: '1.75rem', md: '2rem' },
                  }}
                >
                  {t('contact.form.title')}
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <StyledTextField
                        required
                        fullWidth
                        label={t('contact.form.firstName')}
                        name="firstName"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <StyledTextField
                        required
                        fullWidth
                        label={t('contact.form.lastName')}
                        name="lastName"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <StyledTextField
                        required
                        fullWidth
                        label={t('contact.form.email')}
                        name="email"
                        type="email"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <StyledTextField
                        fullWidth
                        label={t('contact.form.phone')}
                        name="phone"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <StyledTextField
                        required
                        fullWidth
                        label={t('contact.form.subject')}
                        name="subject"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <StyledTextField
                        required
                        fullWidth
                        label={t('contact.form.message')}
                        name="message"
                        multiline
                        rows={4}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <StyledButton
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={formStatus === 'sending'}
                      >
                        {formStatus === 'sending'
                          ? t('contact.form.sending')
                          : t('common.buttons.sendMessage')}
                      </StyledButton>
                      {formStatus === 'success' && (
                        <Typography color="success.main" sx={{ mt: 2, textAlign: 'center' }}>
                          {t('contact.form.success')}
                        </Typography>
                      )}
                      {formStatus === 'error' && (
                        <Typography color="error" sx={{ mt: 2, textAlign: 'center' }}>
                          {t('contact.form.error')}
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                </form>
              </StyledCard>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Grid container spacing={3}>
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Grid item xs={12} key={index}>
                      <StyledCard>
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconWrapper>
                              <Icon />
                            </IconWrapper>
                            <Box>
                              <Typography
                                variant="h6"
                                gutterBottom
                                sx={{ fontWeight: 600, color: '#333' }}
                              >
                                {info.title}
                              </Typography>
                              <Typography
                                variant="body1"
                                sx={{ color: '#666', lineHeight: 1.6 }}
                              >
                                {info.content}
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </StyledCard>
                    </Grid>
                  );
                })}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact; 