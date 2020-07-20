import { useEffect, useState } from 'react';

import getScreenSize from './utils/getScreenSize';

const currentScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(getScreenSize());
  const handleResize = () => setScreenSize(getScreenSize());

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

export default currentScreenSize;
