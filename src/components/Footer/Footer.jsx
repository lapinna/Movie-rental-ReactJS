import "./Footer.style.scss";

const Footer = ({madeBy, year}) => {
  return (
    <footer>
      <div className="footer-left">{madeBy}</div>
      <div className="footer-right">{year}</div>
    </footer>
  );
};

export default Footer;
