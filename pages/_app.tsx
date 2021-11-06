import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import * as mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: Date,
  userid: String,
  postid: String,
});

export const postModel = mongoose.model("posts", postSchema);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-darkBlurple">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <footer className="flex justify-center items-center bg-darkBlurple text-white">
        <a target="_blank" rel="noopener noreferrer">
          made by tristan :)
        </a>
      </footer>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default MyApp;
