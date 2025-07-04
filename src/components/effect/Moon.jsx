import React from 'react';
import luneIcon from '../../assets/img_projet/Lune_ico.png';

export default function Moon() {
  return (
    <div className="fixed left-0 w-full h-screen flex justify-center pointer-events-none z-10">
      <div className="relative flex items-center justify-center">
        {/* Lune */}
        <img 
          src={luneIcon} 
          alt="Lune" 
          className="w-32 h-32 md:w-64 md:h-64 object-contain drop-shadow-2xl"
        />
        {/* Effet de lueur */}
        <div className="absolute inset-0 w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent blur-xl"></div>
      </div>
    </div>
  );
}
