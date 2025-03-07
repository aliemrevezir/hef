import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import LogisticsServices from '../pages/LogisticsServices';
import NotFound from '../pages/NotFound';

// Lazy loaded pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const MechanicalServices = lazy(() => import('../pages/MechanicalServices'));
const ElectronicalServices = lazy(() => import('../pages/ElectronicalServices'));
const Contact = lazy(() => import('../pages/Contact'));

const LoadingFallback = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <CircularProgress />
  </Box>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/logistics-services" element={<LogisticsServices />} />
        <Route path="/mechanical-services" element={<MechanicalServices />} />
        <Route path="/electronical-services" element={<ElectronicalServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes; 