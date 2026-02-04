import React from "react";

const PageBackground = ({ children }) => {
  return (
    <div
      className="
        min-h-screen
        bg-[url('/src/assets/heroImage.jpg')]
        bg-cover bg-center bg-fixed
      "
    >
      {/* Dark overlay for readability */}
      <div className="bg-black/60 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default PageBackground;
