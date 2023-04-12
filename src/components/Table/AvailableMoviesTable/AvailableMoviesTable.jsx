import "./AvailableMoviesTable.style.scss";

const AvailableMoviesTable = () => {
  return (
    <div className="content-container">
      <h1>Available Movies</h1>
      <table className="available-movies-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Genre</th>
            <th>Price for 12h</th>
            <th>Is in stock</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default AvailableMoviesTable;
