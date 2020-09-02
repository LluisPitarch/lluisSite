import { useMediaQuery } from 'react-responsive';

export const useResponsive = () => {
  const isBigScreen = useMediaQuery({
    minWidth: 1400,
  });

  const isDesktop = useMediaQuery({
    minWidth: 801,
    maxWidth: 1399,
  });

  const isSmallDesktop = useMediaQuery({
    minWidth: 801,
    maxWidth: 1000,
  });

  const isTablet = useMediaQuery({
    minWidth: 501,
    maxWidth: 800,
  });
  const isPhone = useMediaQuery({
    maxWidth: 500,
  });

  const isTabletOrPhone = useMediaQuery({
    maxWidth: 800,
  });

  return {
    isBigScreen: isBigScreen,
    isTablet: isTablet,
    isPhone: isPhone,
    isDesktop: isDesktop,
    isTabletOrPhone: isTabletOrPhone,
    isSmallDesktop: isSmallDesktop,
  };
};
