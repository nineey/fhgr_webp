import React from "react";

export default function Pagination(props) {
  return (
    <div>
      <button onClick={() => props.handlePaginationUp()}>Next page</button>
    </div>
  );
}
