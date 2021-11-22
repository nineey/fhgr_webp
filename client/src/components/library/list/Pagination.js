import React from "react";

export default function Pagination({ page, setPage, maxPages }) {
  return (
    <>
      <button onClick={() => setPage(page - 1)}>Previous page</button>

      <button onClick={() => setPage(page + 1)}>Next page</button>

      <p>
        Page {page} of {maxPages}
      </p>
    </>
  );
}
