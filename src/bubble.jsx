import React, { useEffect } from 'react';

const BubbleCursor = () => {
  useEffect(() => {
    const createBubble = (e) => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.left = `${e.clientX}px`;
      bubble.style.top = `${e.clientY}px`;
      document.body.appendChild(bubble);

      setTimeout(() => {
        bubble.remove();
      }, 11000); // Duration the bubble stays before disappearing
    };

    window.addEventListener('mousemove', createBubble);

    return () => {
      window.removeEventListener('mousemove', createBubble);
    };
  }, []);

  return null; // No visual element; purely for the effect
};

export default BubbleCursor;
