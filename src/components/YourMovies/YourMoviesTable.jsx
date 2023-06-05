import { useDispatch, useSelector } from "react-redux";
import Table from "../Table/Table";
import TableRow from "../TableRow/TableRow";
import { removeYourMovie } from "../../redux/features/movies/yourMoviesSlice";
import { incrementMovieCount } from "../../redux/features/movies/moviesSlice";

const YourMoviesTable = () => {
  const yourMovies = useSelector((state) => state.yourMovies);

  const dispatch = useDispatch();

  const handleRemoveYourMovie = (movie) => {
    dispatch(incrementMovieCount(movie));
    dispatch(removeYourMovie(movie));
  };

  return (
    <Table
      contentHeader="Your movies"
      header1="Name"
      header2="Genre"
      header3="Time"
      header4="Price"
      tableRow={
        yourMovies &&
        yourMovies.map((row, index) => {
          return (
            <TableRow
              key={index}
              data1={row.title}
              data2={row.genre}
              data3={
                <>
                  <button className="time-btn">&lt;</button>
                  12 h<button className="time-btn">&gt;</button>
                </>
              }
              data4={row.price}
              buttonName="Remove"
              handleClick={() => handleRemoveYourMovie(row)}
            />
          );
        })
      }
    />
  );
};

export default YourMoviesTable;
