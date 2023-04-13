import "./Table.style.scss";

const Table = ({
  content,
  contentHeader,
  header1,
  header2,
  header3,
  header4,
  buttonName,
}) => {
  function getRowsData() {
    let items = content;
    let keys = Object.keys(content[0]);
    return items.map((row, index) => {
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} keys={keys} />
          <td>
            <button>{buttonName}</button>
          </td>
        </tr>
      );
    });
  }

  const RenderRow = (props) => {
    return props.keys.map((key, index) => {
      return (
        <td className={`data-` + index} key={index}>
          {props.data[key]}
        </td>
      );
    });
  };

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
        <tbody>{getRowsData()}</tbody>
      </table>
    </div>
  );
};

export default Table;
