import { Container } from "react-bootstrap";
import Menu from "./Menu";

const PageLayout = ({ children, className }) => {
  return (
    <Container>
      <Menu />
      <div className={`page-wrapper ${className}`}>{children}</div>
      <footer className="page-footer">
        <div>
          <a href="#">courses</a>
          {" | "}
          <a href="#">github</a>
          {" | "}
          <a href="#">facebook</a>
        </div>
      </footer>
    </Container>
  );
};

export default PageLayout;
