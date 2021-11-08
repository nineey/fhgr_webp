import React from "react";
import Select from "react-select";

const options = [
  { value: "Documentaries", label: "Documentaries" },
  { value: "International TV Shows", label: "International TV Shows" },
  { value: "TV Dramas", label: "TV Dramas" },
  { value: "TV Mysteries", label: "TV Mysteries" },
];

export default function GenreSelector(props) {
  //   if (props.selectedGenre) {
  //     console.log(props.selectedGenre);
  //   }
  return (
    <Select
      placeholder="Select genre ..."
      className="mt-3 w-50 text-dark"
      options={options}
      onChange={props.handleSelectedGenre}
      isClearable={true}
      clearValue={null}
    />
  );
}
