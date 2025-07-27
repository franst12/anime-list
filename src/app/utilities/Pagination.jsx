import React from 'react';

const Pagination = ({ page, setPage, lastPage }) => {
  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <div className="flex justify-center items-center text-xl gap-5">
      <button onClick={handlePrevPage} className="flex justify-center items-center p-3  hover:text-accent">
        prev
      </button>
      <p className="flex justify-center items-center gap-3">
        {page} <span>of</span> {lastPage}
      </p>
      <button onClick={handleNextPage} className="flex justify-center items-center p-3  hover:text-accent">
        Next
      </button>
    </div>
  );
};

export default Pagination;
