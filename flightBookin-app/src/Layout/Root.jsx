import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Container from "../components/Shared/Container";
import Top from "../components/Topbar/Top";
const Root = () => {
  return (
    <div>
      <Header />
      <Top />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default Root;
