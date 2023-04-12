import "./Table.style.scss";

const Table = ({ contentHeader, header1, header2, header3, header4 }) => {
  return (
    <div className="content-container">
    <h1>{contentHeader}</h1>
    <table className="available-movies-table">
      <thead>
        <tr>
          <th>{header1}</th>
          <th>{header2}</th>
          <th>{header3}</th>
          <th>{header4}</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    </div>
  );
};

export default Table;
