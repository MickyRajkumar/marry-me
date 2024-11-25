'use client';
import { FC, useState } from 'react';
export const Landing: FC = () => {
  const [position, setPosition] = useState({ top: 490, right: 790 });
  const [isYes, setIsYes] = useState(false);

  const handleHover = () => {
    // Get window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calculate safe random positions for the button
    const buttonWidth = 67; // Approximate button width
    const buttonHeight = 40; // Approximate button height
    const randomTop = Math.random() * (windowHeight - buttonHeight);
    const randomLeft = Math.random() * (windowWidth - buttonWidth);

    setPosition({ top: randomTop, right: randomLeft });
  };

  return (
    <div className="overflow-hidden relative w-full h-screen flex justify-center items-center">
      <div
        className={`absolute 
          cursor-pointer transition-all duration-500 ${
            isYes ? 'text-[900px] opacity-100 z-10' : 'opacity-0 -z-10'
          }`}
      >
        {/* <div
            className={`
            p-4 text-lg cursor-pointer transition-all duration-500 ${
              w-full h-full justify-center items-center  
              isYes ? 'text-[900px] opacity-100 z-10' : 'opacity-0 -z-10'
              }`}
              > */}
        <div
          className="
          w-full h-full justify-center items-center  
          "
        >
          <span>❤️</span>
          <div
            className={`w-[500px]
            ${isYes ? ' opacity-100' : 'opacity-0'}
          absolute  top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700
          `}
          >
            <p className="text-4xl text-white text-center">
              Well, well, you’re stuck with me now no take-backs! 😏 Love you
              forever, my partner-in-crime and cuttie princess! 🥰
            </p>
          </div>
        </div>
      </div>
      <div className="min-w-72">
        <h1 className="text-2xl">
          Will you marry me and make me the happiest person alive?
        </h1>
        <div className="mt-4 w-[16rem] mx-auto">
          <button
            onClick={() => setIsYes(true)}
            className="bg-green-500 overflow-hidden text-white font-bold rounded-lg px-5 py-2 shadow-lg"
          >
            Yes
          </button>
          <div
            onMouseEnter={handleHover}
            style={{
              position: 'absolute',
              top: `${position.top}px`,
              right: `${position.right}px`,
              transition: 'all 0.5s ease-in-out', // Smooth animation
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              opacity: `${isYes ? 0 : 1}`
            }}
          >
            <button className="bg-red-500 h-[40px] w-[67.5938px] overflow-hidden text-white font-bold rounded-lg shadow-lg">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
