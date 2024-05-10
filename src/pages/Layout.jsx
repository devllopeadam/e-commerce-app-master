import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";
import { ActiveLinkProvider } from "../context/ActiveLinkContext";
import { OrdersProvider } from "../context/OrdersContext";
import { OrderQuantitiesProvider } from "../context/OrderQuantitiesContext";

const Layout = () => {
  return (
    <ActiveLinkProvider>
      <OrdersProvider>
        <OrderQuantitiesProvider>
          <Header />
          <Outlet />
          <Footer />
        </OrderQuantitiesProvider>
      </OrdersProvider>
    </ActiveLinkProvider>
  );
};

export default Layout;
