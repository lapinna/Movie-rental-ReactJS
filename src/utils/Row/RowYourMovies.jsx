const RowYourMovies = ({ content, buttonName, handleClick }) => {
  
  return content.map((row, index) => {
    let rentTime = 12;

    const handleRentTimePlus = (index) => {
      if (rentTime === 168) {
        alert("Max hours reached!");
      } else {
        rentTime = parseInt(rentTime + 12);
      }
      console.log("CLickP", rentTime)
      return rentTime;
    };

    const handleRentTimeMinus = (index) => {
      if (rentTime === 12) {
        alert("Min hours reached!");
      } else {
        rentTime = parseInt(rentTime - 12); 
      }
      console.log("CLickM", rentTime)
      return rentTime;
    };

    return (
      <tr key={index}>
        <td data={row}>{row.title}</td>
        <td data={row}>{row.genre}</td>
        <td data={row}>
          <button className="time-btn" onClick={() => handleRentTimeMinus(index)}>
            &lt;
          </button>
          {rentTime} h
          <button className="time-btn" onClick={() => handleRentTimePlus(index)}>
            &gt;
          </button>
        </td>
        <td data={row}>{row.price}</td>
        <td>
          <button key={index} onClick={() => handleClick(index)}>
            {buttonName}
          </button>
        </td>
      </tr>
    );
  });
};

export default RowYourMovies;
