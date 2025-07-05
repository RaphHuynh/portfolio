import React from 'react';
import luneIcon from '../../assets/img_projet/Lune_ico.png';

export default function Moon() {
  return (
    <div className="fixed left-0 w-full h-screen flex justify-center items-center pt-0 pointer-events-none z-10">
      <div className="relative flex items-center justify-center">
        {/* Lune */}
        <img 
          src={luneIcon} 
          alt="Lune" 
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain drop-shadow-2xl"
        />
        {/* Effet de lueur */}
        <div className="absolute inset-0 w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent blur-xl"></div>
      </div>
    </div>
  );
}
