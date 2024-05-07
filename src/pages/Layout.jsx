import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";
import { ActiveLinkProvider } from "../context/ActiveLinkContext";

const Layout = () => {
  return (
    <ActiveLinkProvider>
      <Header />
      <Outlet />
      <Footer />
    </ActiveLinkProvider>
  );
};

export default Layout;
