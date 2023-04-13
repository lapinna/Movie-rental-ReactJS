import Table from "../../../utils/Table/Table";
import { initialMovieData } from "../../../utils/Movies";
import "../../../assets/check.png";
import "../../../assets/cross.png";

const AvailableMoviesTable = () => {
  localStorage.setItem("movies", JSON.stringify(initialMovieData));
  const movies = JSON.parse(localStorage.getItem("movies"));

  return (
    <Table
      content={movies}
      contentHeader="Available movies"
      header1="Name"
      header2="Genre"
      header3="Price for 12h"
      header4="Is in stock"
      buttonName="Rent"
    />
  );
};

export default AvailableMoviesTable;
