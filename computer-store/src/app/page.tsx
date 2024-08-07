
import type { Metadata } from "next";
import Hero from "./(HomePage)/Hero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home-Store",
  description: "Generated by create next app",
};

export default function Homepage() {
  return (
    <>
      <Hero />
      <Footer />
    </>
  )
}
