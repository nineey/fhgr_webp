import React, { Component } from "react";
import { useParams, useLocation } from "react-router-dom";

// export class Details extends Component {
//   render() {
//     return (
//       <>
//         <div>Details</div>
//       </>
//     );
//   }
// }

function Details(props) {
  let netflixLibrary = props.netflixLibrary;
  const { show_id } = useParams();
  const getDetailsById = netflixLibrary.find(
    ({ show_id }) => show_id === show_id
  );

  //   console.log(getDetailsById);
  //   console.log(getDetailsById[0].title);

  return (
    <>
      <div>Show ID: {show_id}</div>
      <div>Title: {getDetailsById.title}</div>
    </>
  );
}

export default Details;
