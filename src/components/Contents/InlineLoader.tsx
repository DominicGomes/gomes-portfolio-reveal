
import { Player } from '@lottiefiles/react-lottie-player';

interface InlineLoaderProps {
  size?: number;
}

const InlineLoader = ({ size = 24 }: InlineLoaderProps) => {
  return (
    <Player
      autoplay
      loop
      src="/save-loading.json"
      style={{ height: `${size}px`, width: `${size}px` }}
      rendererSettings={{
        preserveAspectRatio: 'xMidYMid slice'
      }}
    />
  );
};

export default InlineLoader;
