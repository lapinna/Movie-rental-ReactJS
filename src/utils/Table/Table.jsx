// import { createRef, forwardRef } from "react";
import "./Table.style.scss";

const Table = ({
  contentHeader,
  header1,
  header2,
  header3,
  header4,
  tableRow
}) => {
  return (
    <div className="content-container">
      <h1>{contentHeader}</h1>
      <table>
        <thead>
          <tr>
            <th>{header1}</th>
            <th>{header2}</th>
            <th>{header3}</th>
            <th>{header4}</th>
          </tr>
        </thead>
        <tbody>{tableRow}</tbody>
      </table>
    </div>
  );
};

export default Table;
