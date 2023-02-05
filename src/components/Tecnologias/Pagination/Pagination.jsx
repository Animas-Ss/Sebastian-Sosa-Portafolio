import React from "react";
import './Pagination.css';

const Pagination = ({totalPosts, postPerPage, setCurrentPage, currentPage,setPostPerPage}) => {
  let pages = [];
  
  for(let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++){
    pages.push(i);
  }
  
  return (
    <>
      <div>
        {pages.map((page, index) => {
         return (
          <button 
            key={index} 
            onClick={() => setCurrentPage(page)}
            className={`btn-pagination ${page === currentPage ? "activo-pagination-btn" : " "}`}
            >
            {page}
          </button>
        )
      }
      )}
    </div>
    </>
  )
}

export default Pagination;