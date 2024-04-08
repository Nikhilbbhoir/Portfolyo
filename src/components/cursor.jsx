import React, { useState, useEffect } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = (event) => {
      setHoveredElement(event.target);
    };

    const handleMouseLeave = () => {
      setHoveredElement(null);
    };

    // Add event listeners for mouse movement, enter, and leave
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup function to remove event listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const invertColor = (hexColor) => {
    // Function to invert hex color (assuming valid hex format)
    const rgb = hexColor.substring(1).match(/[A-Za-z0-9]{2}/g).map((val) => parseInt(val, 16));
    return (
      "#" +
      rgb.map((x) => (255 - x).toString(16).padStart(2, '0')).join('')
    );
  };

  const cursorStyles = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    // mix-blend-mode:'exclusion',
    transform: hoveredElement ? 'scale(1.2)' : 'none', // Optional cursor scale on hover
    filter: hoveredElement
      ? `invert(${invertColor(hoveredElement.style.backgroundColor)}%)`
      : 'none', // Invert color based on hovered element's background
  };

  return (
    <div className="custom-cursor  fixed w-16 h-16 bg-blend-exclusion bg-white border border-black rounded-full transition-transform-0.5s" style={cursorStyles} />
  );
}

export default CustomCursor;
