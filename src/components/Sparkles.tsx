import React, { useEffect, useState } from 'react';

interface SparkleProps {
  color?: string;
  count?: number;
}

const Sparkles: React.FC<SparkleProps> = ({ color = '#ffffff', count = 30 }) => {
  const [sparkles, setSparkles] = useState<{ id: number; style: React.CSSProperties }[]>([]);

  useEffect(() => {
    const createSparkles = () => {
      const newSparkles = [];
      
      for (let i = 0; i < count; i++) {
        // Generate random position
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        // Generate random size between 2px and 5px
        const size = Math.floor(Math.random() * 4) + 2;
        
        // Generate random animation delay
        const delay = Math.random() * 5;
        
        // Generate random duration between 3s and 6s
        const duration = Math.random() * 3 + 3;
        
        // Create sparkle with unique ID
        const sparkle = {
          id: i,
          style: {
            left: `${left}%`,
            top: `${top}%`,
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          },
        };
        
        newSparkles.push(sparkle);
      }
      
      setSparkles(newSparkles);
    };
    
    createSparkles();
    
    // Regenerate sparkles every 10 seconds for a dynamic effect
    const interval = setInterval(createSparkles, 10000);
    
    return () => clearInterval(interval);
  }, [color, count]);

  return (
    <div className="sparkles-container">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={sparkle.style}
        />
      ))}
    </div>
  );
};

export default Sparkles;