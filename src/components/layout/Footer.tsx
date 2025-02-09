import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.primary.main,
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              {t('footer.company')}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                {t('footer.address')}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                +90 (212) XXX XX XX
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                info@hefmacglobal.com
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              {t('common.navigation.services')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { name: t('common.navigation.home'), path: '/' },
                { name: t('common.navigation.about'), path: '/about' },
                { name: t('common.navigation.services'), path: '/services' },
                { name: t('common.navigation.contact'), path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  color="inherit"
                  sx={{
                    mb: 1,
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Working Hours */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Working Hours
            </Typography>
            <Typography variant="body2" paragraph>
              Monday - Friday: 9:00 - 18:00
            </Typography>
            <Typography variant="body2">
              Saturday - Sunday: Closed
            </Typography>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 4, opacity: 0.8 }}
        >
          © {currentYear} {t('footer.company')}. {t('footer.rights')}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 