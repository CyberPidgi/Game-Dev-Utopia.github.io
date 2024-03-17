"use client";
import Image from "next/image";
/**
 * @typedef {Object} GameMedia
 * @property {string} img
 * @property {string} video
 * @type {GameMedia[]} games_media
 */

// import games_media from '../data/home_page_thumbnails'
import React, { useState } from "react";
import styles from "../styles/HomePageGame.module.css";
import PaymentModel from "./PaymentModel";
const HomePageGame = () => {
  return (
    <section className="flex justify-between w-screen h-[80dvh] bg-white relative">
      <span className={`w-full ${styles.home_game_1} relative`}>
        <Image
          className="object-cover"
          src={"/images/home_page_thumbnails/first.png"}
          fill={true}
          alt="image-1"
        />
      </span>
      <span className={`w-full ${styles.home_game_2}`}>
        <Image
          className="object-cover -z-10"
          src={"/images/home_page_thumbnails/second.jpg"}
          fill={true}
          alt="image-1"
        />
      </span>
      <span className={`w-full ${styles.home_game_3} relative`}>
        <Image
          className="object-cover "
          src={"/images/home_page_thumbnails/third.jpeg"}
          fill={true}
          alt="image-1"
        />
      </span>
    </section>
  );
};
export default function HomePageGamesSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(100); // Set your price accordingly

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <section>
      <h2 className="text-5xl text-headings">Games</h2>

      <div className="p-4">
        <button
          className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          onClick={openModal}
        >
          Open Payment Modal
        </button>
        <PaymentModel isOpen={isOpen} setIsOpen={setIsOpen} price={price} />
      </div>
      <div>
        <HomePageGame />
      </div>
    </section>
  );
}
