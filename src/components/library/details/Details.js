import React from "react";
import { useParams } from "react-router-dom";

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
  let getDetailsById;

  if (netflixLibrary) {
    // console.log(show_id);
    getDetailsById = netflixLibrary.find(
      (element) => element.show_id === show_id
    );
    // console.log(getDetailsById);
  }

  return (
    <>
      {getDetailsById ? (
        <>
          <ul>
            <li>{getDetailsById.show_id}</li>
            <li>{getDetailsById.title}</li>
          </ul>
        </>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default Details;
