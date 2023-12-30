import { useState } from 'react';
import { useEffect } from 'react';

function useMediaQuery(media) {
  const [state, setState] = useState(window.matchMedia(media).matches);

  useEffect(() => {
    // Update isMobile on window resize
    const handleResize = () => {
      setState(window.matchMedia('(max-width: 768px)').matches);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  if (!media) return 'Please input the media query';

  return state;
}

export default useMediaQuery;
