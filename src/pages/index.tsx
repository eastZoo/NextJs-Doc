import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { IntroPage } from "../components/templates/IntroPage";
import { LoginPage } from "../components/templates/LoginPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <IntroPage />
      <LoginPage />
    </>
  );
}
