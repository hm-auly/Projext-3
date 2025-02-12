import {Button, Slider, } from "@heroui/react";
import './App.css'
import MyNavber from "./Components/MainContent/Navber";
import Hiro from "./Components/MainContent/Hiro";
import ImageCard from "./Components/MainContent/Card";
import MyLogos from "./Components/MainContent/Logos";
import UseChildren from "./Components/MainContent/UseChildren";
import MySlider from "./Components/MainContent/slider";
import Footer from "./Components/MainContent/Footer";
import SeeGalery from "./Components/MainContent/SeeGalery";

function App() {
  return (
    <>
     <MyNavber />
     <Hiro />
     <ImageCard />
     <MyLogos />
     <UseChildren />
     <MySlider />
     <SeeGalery />
     <Footer />
     
    </>
  )
}

export default App
