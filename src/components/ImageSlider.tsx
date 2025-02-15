import { useState, useEffect } from 'react';
import { Box, LinearProgress, CircularProgress } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// Styled components
const SliderContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '500px',
  overflow: 'hidden',
  borderRadius: '24px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
  [theme.breakpoints.down('md')]: {
    height: '300px',
  },
}));

const SlideButton = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(8px)',
  borderRadius: '50%',
  width: '48px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 2,
  border: '2px solid rgba(255, 255, 255, 0.3)',
}));

const Progress = styled(LinearProgress)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 2,
  height: '4px',
  backgroundColor: 'rgba(255,255,255,0.2)',
  '& .MuiLinearProgress-bar': {
    backgroundColor: 'white',
  },
}));

interface ImageSliderProps {
  images: string[];
  autoPlayInterval?: number;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9,
  }),
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

const ImageSlider = ({ images, autoPlayInterval = 5000 }: ImageSliderProps) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const imageIndex = Math.abs(page % images.length);

  useEffect(() => {
    const loadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = src;
      });
    };

    const loadImages = async () => {
      setIsLoading(true);
      try {
        await Promise.all(images.map(loadImage));
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load images:', error);
        setIsLoading(false);
      }
    };

    loadImages();
  }, [images]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPage([page + 1, 1]);
    }, autoPlayInterval);

    const progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + (100 / (autoPlayInterval / 100));
        return newProgress >= 100 ? 0 : newProgress;
      });
    }, 100);

    return () => {
      clearInterval(intervalId);
      clearInterval(progressInterval);
    };
  }, [page, autoPlayInterval]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setProgress(0);
  };

  const dragEndHandler = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (Math.abs(info.offset.x) > swipeThreshold) {
      paginate(info.offset.x < 0 ? 1 : -1);
    }
  };

  if (isLoading) {
    return (
      <SliderContainer sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress />
      </SliderContainer>
    );
  }

  return (
    <SliderContainer>
      <SlideButton
        as={motion.div}
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        sx={{ left: '20px' }}
        onClick={() => paginate(-1)}
      >
        <ArrowBackIosIcon sx={{ color: 'white', ml: 1 }} />
      </SlideButton>
      
      <SlideButton
        as={motion.div}
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        sx={{ right: '20px' }}
        onClick={() => paginate(1)}
      >
        <ArrowForwardIosIcon sx={{ color: 'white' }} />
      </SlideButton>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={dragEndHandler}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          <Box
            component="img"
            src={images[imageIndex]}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
            }}
            alt={`HEFMAC Global - ${imageIndex + 1}`}
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>
      
      <Progress variant="determinate" value={progress} />
    </SliderContainer>
  );
};

export default ImageSlider;
