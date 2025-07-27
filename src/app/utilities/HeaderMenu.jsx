import React from 'react';

const HeaderMenu = ({ page }) => {
  return (
    <div className="flex justify-center items-center py-7 text-primary font-bold">
      <h1>{`ANIMELIST TERPOPULER #${page}`}</h1>
    </div>
  );
};

export default HeaderMenu;
