import React from "react";
import Pagination from "react-bootstrap/Pagination";
import Fade from "react-reveal/Fade";

export default function ListPagination({ page, setPage, maxPages }) {
  return (
    <Fade>
      <Pagination className="mt-5">
        {page === 1 ? (
          <>
            <Pagination.First disabled />
            <Pagination.Prev disabled />
          </>
        ) : (
          <>
            <Pagination.First onClick={() => setPage(1)} />
            <Pagination.Prev onClick={() => setPage(page - 1)} />
          </>
        )}
        <Pagination.Item>
          {page} of {maxPages}
        </Pagination.Item>

        {page === maxPages ? (
          <>
            <Pagination.Next disabled />
            <Pagination.Last disabled />
          </>
        ) : (
          <>
            <Pagination.Next onClick={() => setPage(page + 1)} />
            <Pagination.Last onClick={() => setPage(maxPages)} />
          </>
        )}
      </Pagination>
    </Fade>
  );
}
