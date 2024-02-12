import  { BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react"
import Navbar from "./Components/Navbar";
import Modal from "./Components/Modal";
import Footer from "./Components/Footer";

import "./styles/app.css";
import WebDesign from "./pages/WebDesign";
import Home from "./pages/Home";

import data from "./data"

export default function App() {
  const [content] = useState(data.data.content);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [cards] = useState(data.data.webdesignContent)
  return (
    <BrowserRouter>
    <main className="container">
      <Navbar />
      <Routes>
        <Route 
          index 
          element=
          {
            <Home 
              content = {content}
              isDisplayed={() => setIsDisplayed(true)}
        />} />
        <Route 
          path="/webdesign" 
          element=
          {
            <WebDesign 
              content = {content}
              isDisplayed={() => setIsDisplayed(false)}
              cards = {cards}
            />} 

        />
      </Routes>
      <Modal />
      <Footer />
    </main>
    </BrowserRouter>
  );

}