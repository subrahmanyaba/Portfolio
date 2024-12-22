// src/components/CanvasBackground.js

import React, { useEffect, useRef } from 'react';

const CanvasBackground = ({ position }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const draw = () => {
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.fillStyle = '#121212'; // Dark background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let i = 0; i < canvas.width; i += 20) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
      }

      for (let i = 0; i < canvas.height; i += 20) {
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
      }

      ctx.stroke();
    };

    draw();
    window.addEventListener('resize', draw);

    return () => {
      window.removeEventListener('resize', draw);
    };
  }, []);

  return <canvas ref={canvasRef} className={`canvas-background ${position}`} />;
};

export default CanvasBackground;
