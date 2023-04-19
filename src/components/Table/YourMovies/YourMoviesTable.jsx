import { useState } from "react";
import Table from "../../../utils/Table/Table";
import Row from "../../../utils/Row/Row";

const YourMoviesTable = () => {
  const initialMovieData = [
    { title: "Titanic", genre: "Romance", price: 3, count: 2 },
    { title: "28 Days Later", genre: "Science Fiction", price: 3, count: 3 },
    { title: "Blue Valentine ", genre: "Romance", price: 3, count: 0 },
    { title: "Apollo 13", genre: "Historical", price: 3, count: 5 },
    { title: "The Blair Witch Project", genre: "Horror", price: 3, count: 4 },
    { title: "Dumb & Dumber", genre: "Comedy", price: 3, count: 2 },
    { title: "Ghostbusters", genre: "Comedy", price: 5, count: 6 },
    { title: "Avatar", genre: "Science Fiction", price: 3, count: 0 },
  ];

  const [movies, setMovies] = useState(() => {
    const updatedMovies = JSON.parse(localStorage.getItem("movies"));
    return updatedMovies || initialMovieData;
  });

  const initialStock = movies.map((index) => index.count);
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
      let findMovie = movies.find(
        (elem) => elem.title === yourMovies[index].title
      );
      setStock([...stock, (findMovie.count += 1)]);
      localStorage.setItem("movies", JSON.stringify(movies));
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
