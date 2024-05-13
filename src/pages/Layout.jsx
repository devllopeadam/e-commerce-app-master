import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";
import { ActiveLinkProvider } from "../context/ActiveLinkContext";
import { OrdersProvider } from "../context/OrdersContext";
import { OrderQuantitiesProvider } from "../context/OrderQuantitiesContext";
import { TotalPriceProvider } from "../context/TotalPriceContext";
import { DataInputsProvider } from "../context/DataInputsContext";
import { PaymentMethodProvider } from "../context/PaymentMethodContext";

const Layout = () => {
  return (
    <ActiveLinkProvider>
      <OrdersProvider>
        <OrderQuantitiesProvider>
          <TotalPriceProvider>
            <PaymentMethodProvider>
              <DataInputsProvider>
                <Header />
                <Outlet />
                <Footer />
              </DataInputsProvider>
            </PaymentMethodProvider>
          </TotalPriceProvider>
        </OrderQuantitiesProvider>
      </OrdersProvider>
    </ActiveLinkProvider>
  );
};

export default Layout;
