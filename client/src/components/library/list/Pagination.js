import React from "react";

export default function Pagination({ page, setPage }) {
  return (
    <div>
      <button onClick={() => setPage(page + 1)}>Next page</button>
    </div>
  );
}
