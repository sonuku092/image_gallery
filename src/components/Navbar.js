import React, { useContext, useState } from "react";
import "./Navbar.css";
import { ImageContext } from "../App";

const Navbar = () => {


  const { fetchData } = useContext(ImageContext);

  // const handleButtonSearch = () => {
  //   fetchData(
  //     `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
  //   )
  //   searchValue("")
  // };

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-xxl my-1">
        <a class="navbar-brand imgtxt" href="#">
          Image Gallery
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex col-6 mx-3" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search image here"
              aria-label="Search"
            />
            <button
              class="btn btn-outline-primary"
              type="submit"
            >
              Search
            </button>
          </form>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item mx-2">
              <a
                class="nav-link active text-light-emphasis"
                aria-current="page"
                href="#"
              >
                Explore
              </a>
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link active text-light-emphasis"
                aria-current="page"
                href="#"
              >
                Collection
              </a>
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link active text-light-emphasis"
                aria-current="page"
                href="#"
              >
                Community
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
