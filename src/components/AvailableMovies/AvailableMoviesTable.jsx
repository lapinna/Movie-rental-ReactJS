import { useSelector, useDispatch } from "react-redux";
import Table from "../Table/Table";
import TableRow from "../TableRow/TableRow";
import { replaceStockImg } from "../../utils/replaceStockImg";
import { decrementMovieCount } from "../../redux/features/movies/moviesSlice";
import { addToYourMovies } from "../../redux/features/movies/yourMoviesSlice";

const AvailableMoviesTable = () => {
  const dispatch = useDispatch();
  const { data: availableMovies } = useSelector((state) => state.movies);

  const handleAddToYourMovies = (movie) => {
    dispatch(decrementMovieCount(movie));
    dispatch(addToYourMovies(movie));
  };

  return (
    <Table
      contentHeader="Available movies"
      header1="Name"
      header2="Genre"
      header3="Price for 12h"
      header4="Is in stock"
      tableRow={availableMovies.map((row, index) => {
        return (
          <TableRow
            key={index}
            data1={row.title}
            data2={row.genre}
            data3={row.price}
            data4={replaceStockImg(row.count)}
            buttonName="Rent"
            handleClick={() => handleAddToYourMovies(row)}
          />
        );
      })}
    />
  );
};

export default AvailableMoviesTable;
