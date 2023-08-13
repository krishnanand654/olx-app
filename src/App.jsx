import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Item from "./Pages/Item/Item";
import { Route, Routes } from "react-router-dom";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
