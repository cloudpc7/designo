import  { BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react"
import Navbar from "./Components/Navbar";
import Modal from "./Components/Modal";
import Footer from "./Components/Footer";

import "./styles/app.css";
import WebDesign from "./pages/WebDesign";
import Home from "./pages/Home";
import AppDesign from "./pages/AppDesign"
import GraphicDesign from "./pages/GraphicDesign"
import About from "./pages/About"
import data from "./data"

export default function App() {
  const [content] = useState(data.data.content);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [btnDisplay, setBtnDisplay] = useState(false);
  const [cards] = useState(data.data.webdesignContent)
  const [appCards] = useState(data.data.appdesignContent);
  const [graphicCards] = useState(data.data.graphicContent);
  const [aboutCard] = useState(data.data.aboutContent)
  const [features, setFeatures] = useState(data.data);

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
              btnDisplay={() => setBtnDisplay(true)}
              features={features.featureContent}
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
        <Route 
          path="/appdesign"
          element=
          {
            <AppDesign
              content= {content}
              isDisplayed={() => setIsDisplayed(false)}
              appCards = {appCards}
            />
          }
        />
        <Route 
          path="/graphicdesign"
          element=
          {
            <GraphicDesign
              content= {content}
              isDisplayed={() => setIsDisplayed(false)}
              cards={graphicCards}
            />
          }
        />
        <Route 
          path="/about"
          element=
          {
            <About 
              content={content}
              isDisplayed={() => setIsDisplayed(true)}
              aboutCards={aboutCard}
              features = {features.aboutFeature}
            />
          }
        />
      </Routes>
      <Modal />
      <Footer />
    </main>
    </BrowserRouter>
  );

}