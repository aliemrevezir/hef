import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import { styled } from '@mui/material/styles';

// Özel stil tanımlamaları
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#e3e3e3',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  position: 'sticky',
  top: 0,
  zIndex: theme.zIndex.drawer + 1,
}));

const StyledButton = styled(RouterLink)(({ theme }) => ({
  color: '#333',
  fontSize: '15px',
  fontWeight: 500,
  textTransform: 'none',
  padding: '8px 16px',
  marginLeft: '8px',
  textDecoration: 'none',
  display: 'inline-block',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    color: theme.palette.primary.main,
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: '#333',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    color: theme.palette.primary.main,
  },
})) as typeof MenuItem;

const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '& img': {
    height: '40px',
    marginRight: '8px',
  },
});

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElLang, setAnchorElLang] = useState<null | HTMLElement>(null);
  const [anchorElServices, setAnchorElServices] = useState<null | HTMLElement>(null);

  const pages = [
    { name: t('common.navigation.home'), path: '/' },
    { name: t('common.navigation.about'), path: '/about' },
    { name: t('common.navigation.contact'), path: '/contact' },
  ];

  const servicePages = [
    { name: t('common.navigation.logisticsServices'), path: '/logistics-services' },
    { name: t('common.navigation.mechanicalServices'), path: '/mechanical-services' },
    { name: t('common.navigation.electronicalServices'), path: '/electronical-services' },
  ];

  const languages = [
    { code: 'tr', name: 'Türkçe' },
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Russian' },
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleOpenServicesMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };

  const handleCloseServicesMenu = () => {
    setAnchorElServices(null);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleCloseLangMenu();
  };

  return (
    <StyledAppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: '80px' }}>
          {/* Logo - Desktop */}
          <LogoContainer sx={{ display: { xs: 'none', md: 'flex' } }}>
            <RouterLink to="/">
              <img src="/images/imagesOptimized/logo.webp" alt="HEFMAC Global" />
            </RouterLink>
          </LogoContainer>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: '#333' }}
            >
              <MenuIcon />
            </IconButton>
            {/* Mobile Menu Items */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* Home and About */}
              {pages.slice(0, 2).map((page) => (
                <StyledMenuItem
                  key={page.path}
                  onClick={handleCloseNavMenu}
                  component={RouterLink as any}
                  to={page.path}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </StyledMenuItem>
              ))}
              
              {/* Services Section */}
              <StyledMenuItem
                onClick={(e) => e.preventDefault()}
                sx={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.02)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.02)',
                  }
                }}
              >
                <Typography textAlign="center" fontWeight="500">
                  {t('common.navigation.services')}
                </Typography>
              </StyledMenuItem>
              {servicePages.map((service) => (
                <StyledMenuItem
                  key={service.path}
                  onClick={handleCloseNavMenu}
                  component={RouterLink as any}
                  to={service.path}
                  sx={{ pl: 4 }}
                >
                  <Typography textAlign="center">{service.name}</Typography>
                </StyledMenuItem>
              ))}

              {/* Contact */}
              <StyledMenuItem
                onClick={handleCloseNavMenu}
                component={RouterLink as any}
                to={pages[2].path}
              >
                <Typography textAlign="center">{pages[2].name}</Typography>
              </StyledMenuItem>
            </Menu>
          </Box>

          {/* Logo - Mobile */}
          <LogoContainer sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            <RouterLink to="/">
              <img src="/images/imagesOptimized/logo.webp" alt="HEFMAC Global" />
            </RouterLink>
          </LogoContainer>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {/* Home and About links */}
            {pages.slice(0, 2).map((page) => (
              <StyledButton
                key={page.path}
                to={page.path}
                onClick={handleCloseNavMenu}
              >
                {page.name}
              </StyledButton>
            ))}
            
            {/* Services Dropdown */}
            <Box
              onMouseEnter={handleOpenServicesMenu}
              onMouseLeave={handleCloseServicesMenu}
              sx={{ 
                display: 'inline-flex',
                position: 'relative',
                alignItems: 'center' 
              }}
            >
              <StyledButton
                to="/services"
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                  '&::after': {
                    content: '""',
                    display: Boolean(anchorElServices) ? 'block' : 'none',
                    position: 'absolute',
                    bottom: 0,
                    left: 8,
                    right: 8,
                    height: '2px',
                    backgroundColor: 'primary.main',
                  }
                }}
              >
                {t('common.navigation.services')}
              </StyledButton>
              <Menu
                id="services-menu"
                anchorEl={anchorElServices}
                open={Boolean(anchorElServices)}
                onClose={handleCloseServicesMenu}
                MenuListProps={{
                  onMouseLeave: handleCloseServicesMenu,
                  sx: { py: 0 }
                }}
                PaperProps={{
                  elevation: 3,
                  sx: {
                    mt: 1,
                    minWidth: 200,
                    '& .MuiMenuItem-root': {
                      py: 1.5
                    }
                  }
                }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                {servicePages.map((service) => (
                  <StyledMenuItem
                    key={service.path}
                    onClick={handleCloseServicesMenu}
                    component={RouterLink as any}
                    to={service.path}
                  >
                    <Typography textAlign="center">{service.name}</Typography>
                  </StyledMenuItem>
                ))}
              </Menu>
            </Box>

            {/* Contact link */}
            <StyledButton
              to={pages[2].path}
              onClick={handleCloseNavMenu}
            >
              {pages[2].name}
            </StyledButton>
          </Box>

          {/* Language Switcher */}
          <Box sx={{ ml: 2 }}>
            <IconButton onClick={handleOpenLangMenu} sx={{ color: '#333' }}>
              <LanguageIcon />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="language-menu"
              anchorEl={anchorElLang}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElLang)}
              onClose={handleCloseLangMenu}
            >
              {languages.map((lang) => (
                <StyledMenuItem
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  selected={i18n.language === lang.code}
                >
                  <Typography textAlign="center">{lang.name}</Typography>
                </StyledMenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;