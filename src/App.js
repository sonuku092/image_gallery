// import logo from './logo.svg';
import React, { createContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ImgCard from "./components/ImgCard";
import Footer from "./components/Footer";
import useAxios from "./useAxios";

export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('animals');
  const { responce, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=${searchImage}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
  );

  const value = {
    responce,
    isLoading,
    error,
    fetchData,
  };
  return (
    <ImageContext.Provider value={value}>
      <Navbar />
      <ImgCard />
      <Footer/>
    </ImageContext.Provider>
  );
}

export default App;
