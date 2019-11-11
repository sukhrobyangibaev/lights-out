import React from "react";
import Head from "next/head";
import Board from "../components/Board";
import "./index.css";

const Home = () => {
  return (
    <div className="root">
      <Head>
        <title>Lights Out</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Board />
    </div>
  );
};

export default Home;
