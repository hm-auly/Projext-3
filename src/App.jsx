import {Button, } from "@heroui/react";
import './App.css'
import MyNavber from "./Components/MainContent/Navber";
import Hiro from "./Components/MainContent/Hiro";
import ImageCard from "./Components/MainContent/Card";
import MyLogos from "./Components/MainContent/Logos";


function App() {
  return (
    <>
     <MyNavber />
     <Hiro />
     <ImageCard />
     <MyLogos />
     
    </>
  )
}

export default App
