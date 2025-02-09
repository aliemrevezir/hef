import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { styled, alpha } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: '#e3e3e3',
  color: '#333',
  padding: theme.spacing(8, 0),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #333 0%, rgba(51,51,51,0.3) 100%)',
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#333',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  display: 'block',
  marginBottom: '8px',
  '&:hover': {
    color: '#000',
    transform: 'translateX(5px)',
  },
})) as typeof Link;

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    marginRight: theme.spacing(2),
    fontSize: '24px',
    color: '#333',
  },
}));

const SocialIcon = styled(Box)(({ theme }) => ({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: alpha('#333', 0.1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(1),
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '& svg': {
    fontSize: '20px',
    color: '#333',
  },
  '&:hover': {
    backgroundColor: '#333',
    transform: 'translateY(-3px)',
    '& svg': {
      color: '#e3e3e3',
    },
  },
})) as typeof Box;

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FacebookIcon, url: '#' },
    { icon: TwitterIcon, url: '#' },
    { icon: LinkedInIcon, url: '#' },
    { icon: InstagramIcon, url: '#' },
  ];

  const navigationLinks = [
    { name: t('common.navigation.home'), path: '/' },
    { name: t('common.navigation.about'), path: '/about' },
    { name: t('common.navigation.services'), path: '/services' },
    { name: t('common.navigation.contact'), path: '/contact' },
  ];

  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              {t('footer.company')}
            </Typography>
            <IconBox>
              <LocationOnIcon />
              <Typography variant="body1">
                {t('footer.address')}
              </Typography>
            </IconBox>
            <IconBox>
              <PhoneIcon />
              <Typography variant="body1">
                +90 (212) XXX XX XX
              </Typography>
            </IconBox>
            <IconBox>
              <EmailIcon />
              <Typography variant="body1" component="a" href="mailto:info@hefmacglobal.com">
                info@hefmacglobal.com
              </Typography>
            </IconBox>
            <Box sx={{ display: 'flex', mt: 3 }}>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <SocialIcon
                    key={index}
                    component={'a' as any}
                    href={social.url}
                  >
                    <Icon />
                  </SocialIcon>
                );
              })}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              {t('footer.quickLinks')}
            </Typography>
            {navigationLinks.map((link) => (
              <FooterLink
                key={link.path}
                component={RouterLink as any}
                to={link.path}
              >
                {link.name}
              </FooterLink>
            ))}
          </Grid>

          {/* Working Hours */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              {t('footer.workingHours')}
            </Typography>
            <Box sx={{ 
              p: 3, 
              bgcolor: alpha('#fff', 0.5), 
              borderRadius: 2,
              border: '1px solid',
              borderColor: alpha('#333', 0.1),
            }}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {t('footer.mondayToFriday')}
                <Typography component="span" sx={{ float: 'right', fontWeight: 600 }}>
                  09:00 - 18:00
                </Typography>
              </Typography>
              <Typography variant="body1">
                {t('footer.saturdayToSunday')}
                <Typography component="span" sx={{ float: 'right', fontWeight: 600 }}>
                  {t('footer.closed')}
                </Typography>
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid',
            borderColor: alpha('#333', 0.1),
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} {t('footer.company')}. {t('footer.rights')}
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer; 