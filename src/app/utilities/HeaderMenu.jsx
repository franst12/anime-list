import Header from '@/src/components/dashboard/Header';
import React from 'react';

const HeaderMenu = ({ page }) => {
  return (
    <div className="flex justify-between items-center py-7 text-primary font-bold">
      <Header />
      <h1>{`ANIMELIST TERPOPULER #${page}`}</h1>
    </div>
  );
};

export default HeaderMenu;
