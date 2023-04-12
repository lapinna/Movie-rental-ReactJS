import Table from "../../../utils/Table/Table";

const AvailableMoviesTable = ({
  contentHeader,
  header1,
  header2,
  header3,
  header4,
}) => {
  return (
    <Table
      contentHeader="Available movies"
      header1="Name"
      header2="Genre"
      header3="Price for 12h"
      header4="Is in stock"
    />
  );
};

export default AvailableMoviesTable;
