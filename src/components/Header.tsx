
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center justify-center pt-8 pb-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-4xl">🏡</span>
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">GharSet</h1>
      </div>
      <p className="text-gray-600 text-center max-w-md">
        Keep track of everything you need for your new home
      </p>
    </header>
  );
};

export default Header;
