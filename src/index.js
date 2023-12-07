import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu"


function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
