const getScreenSize = (): ScreenSize => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export default getScreenSize;
