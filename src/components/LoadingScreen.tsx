import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
      setTimeout(() => {
        setIsExiting(true);
      }, 50);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`loading-container ${isExiting ? "exit" : ""}`}>
      <div className="loading-content">
        <svg viewBox="0 0 400 100" className="loading-svg">
          <defs>
            <clipPath id="wave-clip">
              <path
                className="wave-path"
                d="M-400,0 Q-300,10 -200,0 T0,0 T200,0 T400,0 T600,0 T800,0 V150 H-400 Z"
              />
            </clipPath>
          </defs>

          <text
            x="50%"
            y="50%"
            dy=".35em"
            textAnchor="middle"
            className="loading-text text-outline"
          >
            CHARAN
          </text>

          <text
            x="50%"
            y="50%"
            dy=".35em"
            textAnchor="middle"
            className="loading-text text-fill"
            clipPath="url(#wave-clip)"
          >
            CHARAN
          </text>
        </svg>
      </div>
    </div>
  );
};

export default LoadingScreen;
