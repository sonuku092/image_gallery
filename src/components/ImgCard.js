import { useState, useEffect, useContext } from "react";
import Image from "./Image";
import Loading from "./Loading";
import Hero from "./Hero";
import Skeleton from "./Skeleton";
import "./Navbar.css";
import { ImageContext } from "../App";

export default function ImgCard() {


  const { responce, isLoading } = useContext(ImageContext);

  return (
    <>
      {!responce ? (
        <Loading />
      ) : (
        <section>
          <Hero />
          <div className="container-xl">
            <div className="row justify-content-center">
              {isLoading ? <Skeleton item = {10}/> : responce.map((data, key) => (
                <Image key={key} data={data} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
