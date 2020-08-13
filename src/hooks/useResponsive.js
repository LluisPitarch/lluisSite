import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const useResponsive = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1024px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isPhone = useMediaQuery({ query: '(max-width: 500px)' });

  return {
    isBigScreen: isBigScreen,
    isTablet: isTablet,
    isPhone: isPhone,
  };
};
