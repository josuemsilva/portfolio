import { ArrowBigUp } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  // State to control the visibility of the button
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Function to toggle the button visibility based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Add scroll event listener when the component mounts, and clean up on unmount
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-12 right-12 px-4 py-4 rounded-full bg-slate-500 text-black border-2 border-black shadow-lg 
        transition-opacity duration-300 ease-in-out
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <ArrowBigUp fill='black' size={30}/>
    </button>
  );
};

export default ScrollToTop;
