import { replaceStockImg } from "../Functions/replaceStockImg";

const Row = ({ content, tableData4, buttonName, handleClick }) => {
  let items = content;
  return items.map((row, index) => {
    return (
      <tr key={index}>
        <td data={row}>{row.title}</td>
        <td data={row}>{row.genre}</td>
        <td data={row}>{row.price}</td>
        <td data={row}>{replaceStockImg(row.count)}</td>
        <td>
          <button key={index} onClick={() => handleClick(index)}>
            {buttonName}
          </button>
        </td>
      </tr>
    );
  });
};

export default Row;
