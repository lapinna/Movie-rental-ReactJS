import check from "../assets/check.png";
import cross from "../assets/cross.png";

export function replaceStockImg(data) {
  if (data === 0) {
    return <img src={cross} alt="cross" />;
  } else {
    return <img src={check} alt="check" />;
  }
}
