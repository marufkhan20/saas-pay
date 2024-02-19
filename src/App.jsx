import { Route, Routes } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Seller from "./pages/Seller";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Seller />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
