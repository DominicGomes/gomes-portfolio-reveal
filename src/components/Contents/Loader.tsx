import { Player } from '@lottiefiles/react-lottie-player';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <Player
        autoplay
        loop
        src="/loading-animation.json" 
        style={{ height: '200px', width: '200px' }}
      />
    </div>
  );
};

export default Loader;
