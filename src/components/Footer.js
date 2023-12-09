import React from "react";
import "./Navbar.css";

const Footer = () => {
  return (
    <>
      <div className="shadow-sm">
        <footer className="bg-light text-center text-white">
          <div className="container p-4 pb-0">
            <section className="mb-4">
              <a
                className="bg1 btn btn-primary btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                className="bg2 btn btn-primary btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                className="bg3 btn btn-primary btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-google"></i>
              </a>

              <a
                className="bg4 btn btn-primary btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                className="bg5 btn btn-primary btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="bg6 btn btn-primary btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>

          <div
            className=" bg7 text-center p-3"
          >
            © 2023 Copyright:
            <a className="text-white" href="#/">
              Sonu Kumar Mukhiya
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
