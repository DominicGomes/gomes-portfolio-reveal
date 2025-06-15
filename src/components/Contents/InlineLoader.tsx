
import { Player } from '@lottiefiles/react-lottie-player';

interface InlineLoaderProps {
  size?: number;
}

const InlineLoader = ({ size = 24 }: InlineLoaderProps) => {
  return (
    <Player
      autoplay
      loop
      src="/loading-animation.json"
      style={{ height: `${size}px`, width: `${size}px` }}
    />
  );
};

export default InlineLoader;
