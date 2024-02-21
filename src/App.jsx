import { Route, Routes } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import MultiCurrency from "./pages/MultiCurrency";
import Seller from "./pages/Seller";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Seller />} />
        <Route path="/multi-currency" element={<MultiCurrency />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
