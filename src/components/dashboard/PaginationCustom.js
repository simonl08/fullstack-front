import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { PaginationContainer2 } from "../../styles/globalStyles";

export default function CustomPagination({ setPage, maxPages = 10 }) {
    
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <PaginationContainer2>
        <Pagination
          color="primary"
          size="large"
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={maxPages}
        />
    </PaginationContainer2>
    )}