import React, { useContext, useState } from "react";
import "./Navbar.css";
import { ImageContext } from "../App";

const Hero = () => {
  // const [searchValue, setSearchValue] = useState('');

  // const { fetchData } = useContext(ImageContext);

  // const handleInputChange = (e) => {
  //   setSearchValue(e.target.value);
  // };

  // const handleButtonSearch = () => {
  //   fetchData(
  //     `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
  //   )
  //   setSearchValue("");
  // };

  // const handleEnterDown = e => {
  //   if(e.key ==='Enter'){
  //     fetchData(
  //       `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
  //     )
  //     setSearchValue("");
  //   }
  // }

  return (
    <div className="hero">
      <div className="container py-4 ">
        <h2 className="d-flex justify-content-center mt-2 text-light">
          Download High Quality Images by creators
        </h2>
        <p className="d-flex justify-content-center my-2 text-light">
          Over 2.4 million+ stock Images by our talented community
        </p>
      </div>
      <form class="d-flex col-5 container" role="search">
        <input
          class="form-control me-2 "
          type="search"
          placeholder="Search Images, categories, wallpapers"
          aria-label="Search"
          // value={searchValue}
          // onChange={handleInputChange}
          // onKeyDown={handleEnterDown}
        />
      </form>
    </div>
  );
};

export default Hero;
