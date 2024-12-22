// src/components/Header.js

import React, { useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nodes = [];
    const connections = [];
    const layers = 5;
    const nodesPerLayer = 6;

    // Create nodes
    for (let i = 0; i < layers; i++) {
      const layerNodes = [];
      for (let j = 0; j < nodesPerLayer; j++) {
        layerNodes.push({
          x: (i + 1) * (canvas.width / (layers + 1)),
          y: (j + 1) * (canvas.height / (nodesPerLayer + 1)),
          radius: 10,
        });
      }
      nodes.push(layerNodes);
    }

    // Create connections with initial opacity
    for (let i = 0; i < layers - 1; i++) {
      const layerConnections = [];
      for (let j = 0; j < nodesPerLayer; j++) {
        for (let k = 0; k < nodesPerLayer; k++) {
          layerConnections.push({
            from: nodes[i][j],
            to: nodes[i + 1][k],
            opacity: Math.random() * 0.5 + 0.5, // start with a softer opacity
          });
        }
      }
      connections.push(layerConnections);
    }

    // Function to draw the network
    const drawNetwork = () => {
      ctx.fillStyle = '#1a1a1a';  // Dark gray background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      connections.forEach(layer => {
        layer.forEach(connection => {
          ctx.strokeStyle = `rgba(255, 255, 255, ${connection.opacity})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(connection.from.x, connection.from.y);
          ctx.lineTo(connection.to.x, connection.to.y);
          ctx.stroke();
        });
      });

      // Draw nodes
      nodes.forEach(layer => {
        layer.forEach(node => {
          ctx.fillStyle = '#00ffcc';
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      });
    };

    // Function to animate the network
    const animateNetwork = () => {
      connections.forEach(layer => {
        layer.forEach(connection => {
          // Slowly adjust opacity towards a target value
          const targetOpacity = Math.random() * 0.5 + 0.5;
          connection.opacity += (targetOpacity - connection.opacity) * 0.02; // slow transition
        });
      });
      drawNetwork();
      requestAnimationFrame(animateNetwork);
    };

    animateNetwork();

    // Re-adjust canvas size on window resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawNetwork();
    });
  }, []);

  return (
    <header>
      <canvas ref={canvasRef}></canvas>
      <div className="header-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Creative Developer | Data Engineer | Designer</p>
      </div>
    </header>
  );
};

export default Header;
