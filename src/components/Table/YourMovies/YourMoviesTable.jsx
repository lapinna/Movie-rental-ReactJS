import { useState } from "react";
import Table from "../../../utils/Table/Table";
import Row from "../../../utils/Row/Row";

const YourMoviesTable = () => {
  const updatedMovies = JSON.parse(localStorage.getItem("movies")) || [];

  const initialStock = updatedMovies.map((index) => index.count);
  const [stock, setStock] = useState(initialStock);

  const [yourMovies, setYourMovies] = useState(() => {
    const updatedYourMovies = JSON.parse(localStorage.getItem("yourMovies"));
    return updatedYourMovies || [];
  });

  const clickRemove = (index) => {
    function removeMovie() {
      const rows = [...yourMovies];
      rows.splice(index, 1);
      setYourMovies(rows);
      localStorage.setItem("yourMovies", JSON.stringify(rows));
      addToMovies();
    }
    removeMovie();

    function addToMovies() {
      let findMovie = updatedMovies.find(
        (elem) => elem.title === yourMovies[index].title
      );
      setStock([...stock, (findMovie.count += 1)]);
      localStorage.setItem("movies", JSON.stringify(updatedMovies));
    }
  };
  return (
    <Table
      contentHeader="Your movies"
      header1="Name"
      header2="Genre"
      header3="Time"
      header4="Price"
      tableRow={
        <Row
          content={yourMovies}
          buttonName="Remove"
          handleClick={clickRemove}
        />
      }
    />
  );
};

export default YourMoviesTable;
