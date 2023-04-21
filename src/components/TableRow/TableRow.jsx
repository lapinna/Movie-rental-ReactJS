const TableRow = ({ data1, data2, data3, data4, buttonName, handleClick }) => {
  return (
    <tr>
      <td>{data1}</td>
      <td>{data2}</td>
      <td>{data3}</td>
      <td>{data4}</td>
      <td>
        <button onClick={handleClick}>{buttonName}</button>
      </td>
    </tr>
  );
};

export default TableRow;
