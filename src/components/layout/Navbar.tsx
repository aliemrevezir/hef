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
import Button from '@mui/material/Button';
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

const StyledButton = styled(Button)(({ theme }) => ({
  color: '#333',
  fontSize: '15px',
  fontWeight: 500,
  textTransform: 'none',
  padding: '8px 16px',
  marginLeft: '8px',
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
}));

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

  const pages = [
    { name: t('common.navigation.home'), path: '/' },
    { name: t('common.navigation.about'), path: '/about' },
    { name: t('common.navigation.services'), path: '/services' },
    { name: t('common.navigation.contact'), path: '/contact' },
  ];

  const languages = [
    { code: 'tr', name: 'Türkçe' },
    { code: 'en', name: 'English' },
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
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
            <img src="/src/assets/images/logo.png" alt="HEFMAC Global" />
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
              {pages.map((page) => (
                <StyledMenuItem
                  key={page.path}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={page.path}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </StyledMenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo - Mobile */}
          <LogoContainer sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            <img src="/src/assets/images/logo.png" alt="HEFMAC Global" />
          </LogoContainer>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <StyledButton
                key={page.path}
                component={RouterLink}
                to={page.path}
                onClick={handleCloseNavMenu}
              >
                {page.name}
              </StyledButton>
            ))}
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