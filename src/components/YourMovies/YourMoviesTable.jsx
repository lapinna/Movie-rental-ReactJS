import { useState } from "react";

import Table from "../Table/Table";
import TableRow from "../TableRow/TableRow";

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
      tableRow={yourMovies.map((row, index) => {
        let rentTime = 12;

        const handleRentTimePlus = () => {
          if (rentTime === 168) {
            alert("Max hours reached!");
          } else {
            rentTime = parseInt(rentTime + 12);
          }
          console.log("CLickP", rentTime);
          return rentTime;
        };

        const handleRentTimeMinus = () => {
          if (rentTime === 12) {
            alert("Min hours reached!");
          } else {
            rentTime = parseInt(rentTime - 12);
          }
          console.log("CLickM", rentTime);
          return rentTime;
        };

        return (
          <TableRow
            key={index}
            data1={row.title}
            data2={row.genre}
            data3={
              <>
                <button className="time-btn" onClick={() => handleRentTimeMinus(index)}>
                  &lt;
                </button>
                {rentTime} h
                <button className="time-btn" onClick={() => handleRentTimePlus(index)}>
                  &gt;
                </button>
              </>
            }
            data4={row.price}
            buttonName="Remove"
            handleClick={() => clickRemove(index)}
          />
        );
      })}
    />
  );
};

export default YourMoviesTable;
