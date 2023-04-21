import { useState } from "react";

import Table from "../Table/Table";
import TableRow from "../TableRow/TableRow";
import { replaceStockImg } from "../../utils/replaceStockImg";

const AvailableMoviesTable = () => {
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

  const [movies] = useState(() => {
    const updatedMovies = JSON.parse(localStorage.getItem("movies"));
    return updatedMovies || initialMovieData;
  });

  const initialStock = movies.map((index) => index.count);
  const [stock, setStock] = useState(initialStock);

  const [yourMovies, setYourMovies] = useState(() => {
    const updatedYourMovies = JSON.parse(localStorage.getItem("yourMovies"));
    return updatedYourMovies || [];
  });

  const clickRent = (index) => {
    function rentMovie() {
      if (movies[index].count === 0) {
        alert("Movie not available!");
      } else {
        setStock([...stock, (movies[index].count -= 1)]);
        localStorage.setItem("movies", JSON.stringify(movies));
        addYourMovie();
      }
    }
    rentMovie();

    function addYourMovie() {
      const yourMovieList = [...yourMovies, movies[index]];
      setYourMovies(yourMovieList);
      localStorage.setItem("yourMovies", JSON.stringify(yourMovieList));
    }
  };

  return (
    <Table
      contentHeader="Available movies"
      header1="Name"
      header2="Genre"
      header3="Price for 12h"
      header4="Is in stock"
      tableRow={movies.map((row, index) => {
        return (
          <TableRow
            key={index}
            data1={row.title}
            data2={row.genre}
            data3={row.price}
            data4={replaceStockImg(row.count)}
            buttonName="Rent"
            handleClick={() => clickRent(index)}
          />
        );
      })}
    />
  );
};

export default AvailableMoviesTable;
